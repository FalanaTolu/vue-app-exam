<template>
    <div class="layout-container">
      <header>
        <NavigationBar />
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
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
/* .layout-container {
    height: 100%;
} */

main {
    height: 94lvh;
}
@media (max-width: 768px) {}
</style>
