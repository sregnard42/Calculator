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
    console.log(total, operator, current, "=", state.total)
}

export default {
    // When pressing any button between 0 and 9
    addDigit(state, value) {
        state.current = state.current * 10 + value
    },

    // When pressing any button from the following : +, -, ×, or ÷
    addOperator(state, value) {
        calc(state)
        state.operator = value
        state.current =  0
    },

    // When pressing =
    showResult(state) {
        calc(state)
        state.operator = null
        state.current = 0
    },

    // When pressing C
    reset(state) {
        state.operator = null
        state.current = 0
        state.total = 0
    },
}