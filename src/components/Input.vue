<template>
    <div>
        <input
            v-model="value"
            @input="setValue"
            type="text"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        initialValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "Type something...",
        },
    },
    methods: {
        setValue() {
            this.$emit("set-input-value", this.value);
        },
    },
    data() {
        return {
            value: this.initialValue,
        };
    },
};
</script>

<style scoped>
</style>