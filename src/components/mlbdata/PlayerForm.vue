<template>
    <div>
        <form @submit.prevent="handleSubmit()">
            <label for="firstName">Enter First Name</label>
            <input type="text" v-model="firstName" id="firstName" name="firstName">

            <label for="lastName">Enter Last Name</label>
            <input type="text" v-model="lastName" id="lastName" name="lastName">

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "PlayerForm",
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    },
    methods: {
        handleSubmit() {
            this.$emit("handleSubmit", {firstName: this.firstName, lastName:this.lastName})
        }
    }
}
</script>

<style>

</style>