export default {
    // When pressing any button between 0 and 9
    addDigit({ commit }, value) {
        commit("addDigit", value)
    },

    // When pressing any button from : +, -, ×, or ÷
    addOperator({ commit }, value) {
        commit("addOperator", value)
    },

    // When pressing =
    showResult({ commit }) {
        commit("showResult")
    },

    // When pressing C
    reset({ commit }) {
        commit("reset")
    },
}

// Using commit from components is bad practice (can freeze front for a while); commits are synchronous while actions are asynchronous
// commit() triggers mutations to the state