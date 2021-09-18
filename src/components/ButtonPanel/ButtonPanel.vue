<template>
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
</template>

<script>
    import Button from "./components/Button.vue"
    import OPERATORS from "../../constants/operators"

    export default {
        name: "ButtonPanel",
        components: {
            Button,
        },
        data() {
            const{ OPERATOR_ADD, OPERATOR_SUB, OPERATOR_MUL, OPERATOR_DIV, OPERATOR_RESET, OPERATOR_EQUAL } = OPERATORS
            const { dispatch } = this.$store
            return {
                OPERATOR_ADD,
                OPERATOR_SUB,
                OPERATOR_MUL,
                OPERATOR_DIV,
                OPERATOR_RESET,
                OPERATOR_EQUAL,
                dispatch,
            }
        },
    }
</script>

<style scoped>
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