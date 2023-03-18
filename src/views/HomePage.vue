<template>
  <div>
    <Layout>
      <div class="home">
        <h1>Welcome {{ user }}</h1>
        <nav>
          <article>
            <h2>About</h2>
            <p>A brief introduction to the project.</p>
            <img src="@/assets/img/unsplash2.jpg" alt="" />
            <div><router-link to="/about">Learn More...</router-link></div>
          </article>
          <article>
            <h2>Products</h2>
            <p>Check out some of our products</p>
            <img src="@/assets/img/unsplash3.jpg" alt="" />
            <div><router-link to="/products">Shop now...</router-link></div>
          </article>
        </nav>
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
  
<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  padding: 1em;
}

nav {
  min-width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  grid-auto-rows: 17em;
  margin-top: 10px;
}

article {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  background: linear-gradient(rgba(240,240,240,0.5));
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2);
}

article:hover {
  transform: scale(1.05);
}

article img {
  height: 50px;
  width: 50px;
}
</style>
  