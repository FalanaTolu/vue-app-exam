<template>
  <Loader v-if="loadingState" />
  <router-view v-else></router-view>
</template>

<script>
import Loader from './components/SpinnerComponent.vue'

export default {
  name: 'App',
  computed: {
    authState() {
      return this.$store.state.auth.authenticated
    },
    loadingState() {
      return this.$store.state.auth.loading
    },
  },
  components: {
    Loader,
  },
mounted() {
  this.loadingState
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html,
body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
</style>
