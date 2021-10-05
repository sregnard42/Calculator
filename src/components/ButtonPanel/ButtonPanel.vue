<template>
    <div>
        <div id="keylistener" tabindex="0" @keyup="keymonitor">
            <div class="row">
                <div class="column-reverse">
                    <div class="row">
                        <Button @click.native="dispatch('reset')">
                            {{ OPERATOR_RESET }}
                        </Button>
                        <Button @click.native="dispatch('addDigit', 0)">
                            0
                        </Button>
                        <Button @click.native="dispatch('showResult')">
                            {{ OPERATOR_EQUAL }}
                        </Button>
                    </div>
                    <div class="row" v-for="row in 3" :key="row">
                        <Button
                            v-for="digit in rowDigits(row, 3)"
                            :key="digit"
                            @click.native="dispatch('addDigit', digit)"
                        >
                            {{ digit }}
                        </Button>
                    </div>
                </div>
                <div class="column">
                    <Button @click.native="dispatch('addOperator', OPERATOR_ADD)">
                        {{ OPERATOR_ADD }}
                    </Button>
                    <Button @click.native="dispatch('addOperator', OPERATOR_SUB)">
                        {{ OPERATOR_SUB }}
                    </Button>
                    <Button @click.native="dispatch('addOperator', OPERATOR_MUL)">
                        {{ OPERATOR_MUL }}
                    </Button>
                    <Button @click.native="dispatch('addOperator', OPERATOR_DIV)">
                        {{ OPERATOR_DIV }}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "./components/IconButton.vue"
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
            },
            rowDigits(row, nbOfDigits) {
                const digits = []
                for (let i = 1 ; i <= nbOfDigits ; i++) {
                    const digit = (row - 1) * nbOfDigits + i
                    digits.push(digit)
                }
                return digits
            },
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
        width: 100%;
        height: 100%;
        outline: none;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 5%;
    }
    .column {
        display: flex;
        flex-direction: column;
        margin: 1em;
    }
    .column-reverse {
        display: flex;
        flex-direction: column-reverse;
        margin: 1em;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
</style>