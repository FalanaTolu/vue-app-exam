<template>
    <div>
        <Layout>
            <div class="main">
            <h1>About</h1>
            <p>This is the about page</p></div>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/layouts/LayoutComponent.vue'

export default {
    components: {
        Layout,
    }
}
</script>

<style scoped>
.main {
    height: 100%;
    border: 1px solid red;
}
</style>


<!-- <template>
    <my-layout>
      <template v-slot:header>
        <h1>My App</h1>
      </template>
      <p>This is the main content of the page.</p>
      <template v-slot:footer>
        <p>Copyright © 2023</p>
      </template>
    </my-layout>
  </template> -->