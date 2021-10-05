<template>
    <div id="app">
        <h2>{{ title }}</h2>
        <ButtonPanel />
        <!-- <Output :value="currentValue" /> -->
        <Output :value="inputString" />
        <Output :value="totalValue" size="2" />
    </div>
</template>

<script>
    import ButtonPanel from "./components/ButtonPanel/ButtonPanel.vue"
    import Output from "./components/Output.vue"

    export default {
        name: "App",
        components: {
            ButtonPanel,
            Output,
        },
        computed: {
            currentValue() {
                return this.$store.getters.getCurrent
            },
            totalValue() {
                return this.$store.getters.getTotal
            },
            inputString() {
                return this.$store.getters.getInput
            }
        },
        data() {
            return {
                title: "Calculator in Vue.js",
            }
        },
    }
</script>

<style>
#app {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:lightblue;
}
</style>