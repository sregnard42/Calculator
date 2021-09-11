<template>
    <div id="app">
        <ColorText :msg="text" />
        <br />

        <div v-for="item in array" :key="item">
            <ColorText :msg="item" />
        </div>
        <br />

        <Input @set-input-value="setInputValue($event)" />
        <ColorText
            :msg="
                'Get value from Input and send it to ColorText: ' + inputValue
            "
        />
        <br />

        <Input
            placeholder="Type a color..."
            @set-input-value="setColor($event)"
        />
        <ColorText
            :color="color"
            :msg="'This font color is customizable on the fly'"
        />
    </div>
</template>

<script>
import ColorText from "./components/ColorText";
import Input from "./components/Input";

export default {
    name: "App",
    components: {
        ColorText,
        Input,
    },
    methods: {
        setInputValue(value) {
            this.inputValue = value;
        },
        setColor(value) {
            this.color = value;
        },
    },
    data() {
        return {
            text: "Send this text to child",
            array: "Testing v-for with this array".split(" "),
            inputValue: "",
            color: "",
        };
    },
};
</script>

<style>
#app {
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
