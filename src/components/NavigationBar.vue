<template>
  <div class="nav-bar">
    <p class="logo">HeftyProducts</p>
    <nav>
      <ul :class='isClosed ? "nav-link closed" : "nav-link "'>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
      <img src="@/assets/img/shopping-cart3.svg" id="cart" alt="cart" />
      <button class="hamburger" @click="showSidebar">☰</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      isClosed: true,
    }
  },
  methods: {
    showSidebar() {
      this.isClosed = !this.isClosed;
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

a {
  color: white;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b89e2;
  padding: 10px;
  /* width: 100%; */
  /* min-width: 100%;
  white-space: nowrap; */
}

.nav-link,
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  list-style: none;
  /* min-width: 100%; */
}

.logo {
  font-size: 20px;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  color: white;
}

.router-link-exact-active {
  color: #2c3e50;
  font-weight: bold;
  font-style: italic;
  /* text-decoration: underline; */
}

.hamburger {
  display: none;
  height: 30px;
  width: 30px;
  color: white;
  background: inherit;
  border: 1px solid white;
}

#cart {
  height: 20px;
}

@media (max-width: 768px) {
  .nav-bar {
    position: relative;
  }
  
  .nav-link {
    flex-direction: column;
    position: fixed;
    justify-content: space-evenly;
    top: 50px;
    right: 0;
    padding: 0;
    /* gap: 1em; */
    overflow: hidden;
    height: 100%;
    width: 100%;
    transition: all ease-out 1s;
    white-space: nowrap;
    background-color: blueviolet;
    font-size: 2em;
    z-index: 1;
  }

  .closed {
    transform: translateX(15em);
  }

  .hamburger {
    display: inline-block;
  }

}
</style>
