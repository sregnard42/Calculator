<template>
    <button @keydown="keymonitor">
        <slot />
    </button>
</template>

<script>
export default {
    name: "Button",
    methods: {
        keymonitor: function (e) {
            e.preventDefault()
        }
    },
};
</script>

<style scoped>
    button {
        width: 3em;
        height: 3em;
        padding: 0.8em;
        margin: 0.1em;
        outline: none;
        border: none;
        border-radius: 50%;
        font-size: 2em;
        color: lightblue;
        background-color: rgb(42, 42, 142);
        user-select: none;
    }
    button:hover {
        background-color: rgb(82, 82, 142);
        cursor: pointer;
    }
    button:active {
        background-color: rgb(142, 142, 242);
    }
</style>

