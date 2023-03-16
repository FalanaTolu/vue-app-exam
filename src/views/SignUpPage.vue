<template>
    <div class="form-container">
        <form @submit.prevent="register">
            <h1>Registration</h1>
            <input type="text" placeholder="Username" aria-label="name" v-model="username">
            <input placeholder="Your email" type="email" v-model="email">
            <input type="password" placeholder="Password" :aria-label="password" minLength="6" v-model="password">
            <input placeholder="Confirm password" type="password" v-model="passwordConfirm">
            <button type="submit">Register</button>
            <p>Already registered? <router-link to="/login">Login</router-link></p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        };
    },
    methods: {
        register() {
            if (!this.validatePassword()) {
                return
            }
            let data = {
                user: this.username,
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('auth/register', data).then(() => this.$router.push('/')).catch((error) => console.log(error.message))

        },
        // validatePassword() {
        //     if (this.password !== "" && this.passwordConfirm !== "") {
        //         if (this.password !== this.passwordConfirm) {
        //             alert("Passwords do not match");
        //             return false
        //         }
        //         return true
        //     } else {
        //         alert("Please enter and confirm password");
        //         return false
        //     }
        // }, 
        validatePassword() {
            if (this.password == "" || this.passwordConfirm == "") {
                alert("Please enter and confirm password");
                return false
            } else if (this.password !== this.passwordConfirm) {
                alert("Passwords do not match");
                return false
            } else return true
    },
}

}
</script>

