<template>
  <div>
    <Layout>
      <div class="home">
        <h1>Welcome {{ user }}</h1>
      </div>
      
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
  text-align: left;
  padding: 1em;
}
</style>
  