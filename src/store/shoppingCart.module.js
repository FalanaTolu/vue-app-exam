export default {
  namespaced: true,
  state: {
    cartItems: [],
    // quantity: 0,
    // totalCost: 0,
  },
  mutations: {
    // setCartItems(state, data) {
    //   state.cartItems = data;
    // },
    addToCart(state, item) {
      let cartProductExists = state.cartItems.find(
        (cartProduct) => cartProduct.id == item.id
      );
      if (cartProductExists) {
        cartProductExists.quantity++;
      } else {
        item.quantity = 1;
        state.cartItems.push(item);
        // state.totalCost += item.price;
      }
    },
    removeSingleItem(state, item) {
      let index = state.cartItems.indexOf(item);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems.splice(index, 1);
      }
      // const index = state.cartItems.findIndex((i) => i.id === item.id);
      // state.cartItems.splice(index, 1);
      // state.totalCost -= item.price;
    },
    removeFromCart(state, item) {
      let index = state.cartItems.indexOf(item);
      state.cartItems.splice(index, 1);
    },
  },
  actions: {
    // async getCartItems({ commit }) {
    //   commit("setCartItems", data);
    // },
    async addToCart({ commit }, item) {
      commit("addToCart", item);
    },
    async removeSingleItem({ commit }, item) {
      commit("removeSingleItem", item);
    },
    async removeFromCart({ commit }, item) {
      commit("removeFromCart", item);
    },
  },
  getters: {
    cartItems: (state) => state.cartItems,
    totalCost: (state) => {
      return state.cartItems
        .reduce((acc, cartItem) => {
          return cartItem.quantity * cartItem.price + acc;
        }, 0)
        .toFixed(2);
    },
    totalQuantity: (state) => {
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    },
    // cartItemCount(state) {
    //   return state.cartItems.length;
    // },
  },
};
