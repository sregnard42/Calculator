<template>
    <div v-bind:style="{ color }">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: "ColorText",
    props: {
        msg: String,
        color: {
            type: String,
            default: "lightblue",
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


