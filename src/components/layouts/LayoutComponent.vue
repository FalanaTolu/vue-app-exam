<template>
    <div class="layout-container">
      <header>
        <NavigationBar />
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  </template>

<script>
import NavigationBar from '../NavigationBar.vue';

export default {
    name: "LayoutComponent",
    components: { NavigationBar }
}
</script>

<style scoped>
main {
    height: 94vh;
}
</style>
