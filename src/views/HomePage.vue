<template>
  <div>
    <Layout>
      <div class="home">
        <h1>Welcome {{ user }}</h1>
        <nav>
          <article @click="goToAbout">
            <h2>About</h2>
            <p>A brief introduction to the project.</p>
            <img src="@/assets/img/unsplash2.jpg" alt="about picture" />
            <div style="align-self: flex-end;"><router-link to="/about">Learn More...</router-link></div>
          </article>
          <article @click="goToProducts">
            <h2>Products</h2>
            <p>Check out some of our products</p>
            <img src="@/assets/img/unsplash3.jpg" alt="products picture" />
            <div style="align-self: flex-end;"><router-link to="/products">Shop now...</router-link></div>
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
  methods: {
    goToAbout() {
      this.$router.push({ path: "/about" })
    },  
    goToProducts() {
      this.$router.push({ path: "/products" })
    },
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
  max-width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
}

article {
  /* width: 100%; */
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  gap: .5em;
  align-items: center;
  border: 1px solid rgb(240, 240, 240);
  background: linear-gradient(rgba(240, 240, 240, 0.5));
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
  transition: all ease 0.8s;
}

article:hover {
  transform: scale(1.05);
}

article img {
  height: 150px;
  width: 250px;
  /* align-self: center; */
  object-fit: cover;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 2em;
  }
}
</style>
  