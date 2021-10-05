<template>
    <div>
        <div id="keylistener" tabindex="0" @keyup="keymonitor"></div>
        <div class="row">
            <div class="column">
                <div class="row" v-for="row in 3" :key="row">
                    <Button
                        v-for="col in 3"
                        :key="col + (3 * (row - 1))"
                        :label="(col + (3 * (row - 1))).toString()"
                        @click.native="dispatch('addDigit', col + (3 * (row - 1)))"
                    />
                </div>
                <div class="row">
                    <Button :label="OPERATOR_RESET" @click.native="dispatch('reset')" />
                    <Button label="0" @click.native="dispatch('addDigit', 0)"/>
                    <Button :label="OPERATOR_EQUAL" @click.native="dispatch('showResult')"/>
                </div>
            </div>
            <div class="column">
                <Button :label="OPERATOR_ADD" @click.native="dispatch('addOperator', OPERATOR_ADD)" />
                <Button :label="OPERATOR_SUB" @click.native="dispatch('addOperator', OPERATOR_SUB)" />
                <Button :label="OPERATOR_MUL" @click.native="dispatch('addOperator', OPERATOR_MUL)" />
                <Button :label="OPERATOR_DIV" @click.native="dispatch('addOperator', OPERATOR_DIV)" />
            </div>
        </div>
    </div>
</template>

<script>4
    import Button from "./components/Button.vue"
    import OPERATORS from "../../constants/operators"

    const{ OPERATOR_ADD, OPERATOR_SUB, OPERATOR_MUL, OPERATOR_DIV, OPERATOR_RESET, OPERATOR_EQUAL } = OPERATORS

    export default {
        name: "ButtonPanel",
        components: {
            Button,
        },
        mounted() {
            document.getElementById("keylistener").focus()  
        },
        methods: {
            keymonitor: function ({ key }) {
                console.log(key)
                const { dispatch } = this.$store
                if (key >= 0 && key <= 9) {
                    dispatch("addDigit", parseInt(key))
                }
                else if (["Backspace", "Delete"].includes(key)) {
                    dispatch("reset")
                }
                else if (["Enter", "="].includes(key)) {
                    dispatch("showResult")
                }
                else if (key === "*") {
                    dispatch("addOperator", OPERATOR_MUL)
                }
                else if (key === "/") {
                    dispatch("addOperator", OPERATOR_DIV)
                }
                else if ([OPERATOR_ADD, OPERATOR_SUB].includes(key)) {
                    dispatch("addOperator", key)
                }
            }
        },
        data() {
            const { dispatch } = this.$store
            return {
                dispatch,
                OPERATOR_ADD,
                OPERATOR_SUB,
                OPERATOR_MUL,
                OPERATOR_DIV,
                OPERATOR_RESET,
                OPERATOR_EQUAL,
            }
        },
    }
</script>

<style scoped>
    #keylistener {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(42, 42, 42, 0.1);
        outline: none;
    }
    .column {
        display: flex;
        flex-direction: column;
        margin: 1em;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
</style>