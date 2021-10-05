import OPERATORS from "../constants/operators"

const { OPERATOR_ADD, OPERATOR_SUB, OPERATOR_MUL, OPERATOR_DIV } = OPERATORS
const operations = {
    [OPERATOR_ADD]: (a, b) => (a + b),
    [OPERATOR_SUB]: (a, b) => (a - b),
    [OPERATOR_MUL]: (a, b) => (a * b ),
    [OPERATOR_DIV]: (a, b) => (b === 0 ? Infinity : a / b),
}

const calc = (state) => {
    const { operator, total, current } = state
    const defaultValue = total === 0 ? current : total
    state.total = operator ? operations[operator](total, current) : defaultValue
    if (operator) {
        console.log(total, operator, current, "=", state.total)
    }
}

let lastAction = null

export default {
    // When pressing any button between 0 and 9
    addDigit(state, value) {
        state.current = state.current * 10 + value
        if (state.operator === null) {
            state.total = state.current
        }
        if (lastAction === "showResult") {
            state.input = ""
        }
        state.input += value
        lastAction = "addDigit"
    },

    // When pressing any button from the following : +, -, ×, or ÷
    addOperator(state, value) {
        if (lastAction !== "addOperator") {
            calc(state)
        }
        state.operator = value
        state.current =  0
        state.input = state.total + " " + state.operator + " "
        lastAction = "addOperator"
    },

    // When pressing =
    showResult(state) {
        if (lastAction !== "addDigit") {
            return
        }
        calc(state)
        state.operator = null
        state.current = 0
        state.input += " " + "="
        lastAction = "showResult"
    },

    // When pressing C
    reset(state) {
        state.operator = null
        state.current = 0
        state.total = 0
        state.input = ""
        lastAction = null
    },
}