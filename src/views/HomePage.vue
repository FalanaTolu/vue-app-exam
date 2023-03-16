<template>
  <div>
    <Layout>
      <h1>Home</h1>
      <p>Hello {{ user }}</p>
      <button v-on:click="logout">Logout</button>
    </Layout>
  </div>
</template>
  
<script>
import Layout from '@/components/layouts/LayoutComponent.vue'
import useUser from '@/composables/userComposable'

export default {
  components: {
    Layout,
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
    // user() {
    //   return this.$store.getters.user
    // },
    authState() {
      return this.$store.state.auth.authenticated
    },
    loggedInState() {
      return this.$store.state.auth.loggedIn
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => this.$router.push('/login')).catch((error) => console.log(error.message))
      // this.$store.dispatch("asyncLogout").then(() =>  this.$router.push('/login'))
      console.log('AuthState:', this.authState);
      console.log('Logged on:', this.loggedInState);
      console.log('User:', this.user);
    },
  },
  setup() {
    const { user } = useUser()
    return { user }
  },
}
</script>
  
<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
  