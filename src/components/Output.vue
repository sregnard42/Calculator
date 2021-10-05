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
            type: String,
            default: "0",
        },
        size: {
            type: String,
            default: "1",
        },
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
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>