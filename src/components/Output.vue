<template>
    <div class="container">
        {{ value }}
    </div>
</template>

<script>
export default {
    name: "Output",
    props: {
        value: {
            type: Number,
            default: 0,
        }
    },
}
</script>

<style scoped>
    .container {
        width: 14em;
        height: 1em;
        padding: 0.5em;
        margin: 0.3em;
        border-radius: 25em;

        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;

        background-color: lightblue;
        color: rgb(42, 42, 142);
        font-size: 2em;
    }
</style>