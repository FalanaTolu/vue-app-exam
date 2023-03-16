<template>
  <div class="not-found">
    <div class="not-found-text">
      <h1>404</h1>
      <h2>Page Not Found!</h2>
      <p>Sorry, the page you are looking for does not exist or has been moved to another location</p>
      <p><router-link to="/">🔙Home</router-link></p>
    </div>
    <img src=@/assets/img/crycry.gif alt="crying-baby" />
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: start;
  margin-left: auto;
  padding: 1.5em;
}

/* .not-found-text {
  display: flex;
  flex-direction: column;
  gap: 1em;
} */

.not-found-text > * {
  margin-bottom: 1em;
}
</style>