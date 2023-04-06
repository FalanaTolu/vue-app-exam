<template>
  <div class="nav-bar">
    <p class="logo">HeftyProducts</p>
    <nav>
      <div :class='isClosed ? "nav-link closed" : "nav-link "'>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart">Cart</router-link>
        <button v-on:click="logout" id="logout-btn">Logout<img src="@/assets/img/power.svg" alt="log out"/></button>
      </div>
      <router-link to="/cart" class="cart"><img src="@/assets/img/shopping-cart.svg" alt="cart" /><span v-show="cartItemCount"> {{cartItemCount}}</span></router-link>
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
    logout() {
      this.$store.dispatch("auth/logout").then(() => this.$router.push('/login')).catch((error) => console.log(error.message))
    },
  },
  computed: {
    authState() {
      return this.$store.state.auth.authenticated
    },
    loggedInState() {
      return this.$store.state.auth.loggedIn
    },
    cartItemCount() {
      return this.$store.getters['cart/totalQuantity']
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

a {
  color: white;
  padding: 5px;
}

a:hover {
  filter: brightness(30%);
  font-style: italic;
}

.router-link-active {
  color: #2b2c31;
  /* color: #ff7c73; */
  /* color: #2c3e50; */
  font-weight: bold;
  font-style: italic;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0082cf;
  /* background-color: #2b89e2; */
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

.nav-link button {
  background-color: inherit;
  color: white;
  font-size: inherit;
  border: none;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  color: white;
}

.hamburger {
  display: none;
  height: 30px;
  width: 30px;
  color: white;
  background: inherit;
  border: 1px solid white;
}

.cart {
  height: fit-content;
  position: relative;
}

.cart img {
  height: 20px;
}

.cart span {
  height: 10px;
  width: 10px;
  text-align: center;
  color: white;
  font-size: 9px;
  font-weight: bold;
  margin-left: 5px;
  background-color: palevioletred;
  border-radius: 50%;
  position: absolute;
  bottom: 7px;
  right: 0;
}

#logout-btn img {
  display: none;
  height: 20px;
}

@media (max-width: 480px) {
  a, #logout-btn {
  color: #0082cf;
}

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
    background-color: #f0f0f0f2;
    font-size: 2em;
    z-index: 1;
  }

  #logout-btn img {
  display: inline-block;
  height: 35px;
  vertical-align: middle;
  margin: 0;
}

  .closed {
    transform: translateX(15em);
  }

  .hamburger {
    display: inline-block;
  }

}
</style>
