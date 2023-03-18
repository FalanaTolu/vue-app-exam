<template>
    <div class="form-container">
        <form @submit.prevent="login">
            <img alt="login logo" src="@/assets/img/user.svg" id="login-logo">
            <input type="text" placeholder="Username" :aria-label="username" id="username" v-model="username" required>
            <input type="password" placeholder="Password" :aria-label="password" id="password" v-model="password" required>
            <button type="submit">Login</button>
            <p>Don't have an account? <router-link to="/signup">Sign Up!</router-link></p>
        </form>
    </div>
</template>


<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: "",
            password: "",
        };
    },
    computed: {
        authState() {
            return this.$store.state.auth.authenticated
        },
        loggedInState() {
            return this.$store.state.auth.loggedIn
        },
        loadingState() {
            return this.$store.state.auth.loading
        },
    },
    methods: {
        login() {
            let user = this.username
            let password = this.password
            this.$store.dispatch("auth/asyncLogin", { user, password }).then(() => this.$router.push('/')).catch((error) => console.log(error.message))
        },
    },
    // created() {
    //     if (this.$store.state.user) {
    //         this.$router.push({ path: '/' })
    //     }
    // }
}
</script>

<style>
/* @import '@/assets/css/form.css'; */

.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(90deg, #14b86b, #19a6c3);
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    padding: 5% 0;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    width: 50%;
    min-height: 50%;
    padding: 10%;
}

form>input,
form>button {
    width: 100%;
    margin: 5%;
    padding: 7px;
    border-radius: 15px;
    border: 1px solid #dcdcdc;
    font-size: 1.25rem;
}

form>input {
    background-color: transparent;
    color: inherit;
}

/* form>input:hover {
    opacity: 0.5;
    background-image: linear-gradient(rgb(0, 0, 0/40%) 0 0);
    background-color: hsl(712, 100%, 60%);
} */

form>input:focus {
    background-color: rgba(150, 150, 150, 0.2);
}

/* form>input:invalid {
    background-color:yellow;
} */

/* input::placeholder {
    text-align: center;
    color: #000;
} */

#username {
    background-image: url(@/assets/img/user.svg);
    background-position: 10px 10px;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-left: 40px;
}

#password {
    background-image: url(@/assets/img/lock.svg);
    background-position: 10px 10px;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-left: 40px;
}

form>button {
    border: none;
    background: #14b86b;
    color: #fff;
    cursor: pointer;
}

#login-logo {
    height: 100px;
    margin-bottom: 30px;
    filter: brightness(50%) contrast(100%);
}

@media (max-width: 768px) {
    form {
        width: 80%;
    }
    
    form p {
        font-size: 0.7em;
        white-space: nowrap;
        overflow: hidden;
    }

    input::placeholder {
        font-size: 0.7em;
    }

}

@media (max-width: 280px) {

    form p,
    input::placeholder {
        font-size: 0.5em;
    }

}
</style>
