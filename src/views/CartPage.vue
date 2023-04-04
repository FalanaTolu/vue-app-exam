<template>
    <div>
        <Layout>
            <div class="main">
                <h1>Cart</h1>
                <p v-if="cart == 0">No items to display. Please make a purchase</p>
                <div v-else class="cart-container">
                    <div><strong>Total Cost: </strong>{{ this.$store.getters['cart/totalCost'] }}</div>
                    <div><strong>Total Items: </strong>{{ this.$store.getters['cart/totalQuantity'] }}</div>
                    <div class="cart-item" v-for="item in cart" :key="item.id">
                        <img :src="item.thumbnail" :alt="item.title" class="cart-image" />
                        <div class="cart-info">
                            <p>{{ item.title }}</p>
                            <p><strong>Price: </strong>${{ item.price }}</p>
                            <button type="button" class="remove-item" @click="this.$store.dispatch('cart/removeFromCart', item)">x</button>
                            <div class="item-quantity"><button type="button"
                                    @click="this.$store.dispatch('cart/removeSingleItem', item)">-</button>
                                <p>{{ item.quantity }}</p><button type="button"
                                    @click="this.$store.dispatch('cart/addToCart', item)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/layouts/LayoutComponent.vue'

export default {
    components: {
        Layout,
    },
    data() {
        return {
            cart: null,
        }
    },
    methods: {
        getCart() {
            this.cart = this.$store.state.cart.cartItems
        },
        // removeItem() {
        //     this.$store.dispatch('cart/removeFromCart', item)
        // },
    },
    mounted() {
        this.getCart()
    },
}
</script>

<style scoped>
.main {
    height: 100%;
}

.cart-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px;
}

.cart-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
}

.cart-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.cart-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* height: 70%; */
    width: 15em;
    margin-left: 1em;
    padding: 1em .5em;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
}

.remove-item {
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background-color: transparent;
    font-size: 1.2em;
    font-weight: bold;
    color: red;
}

.item-quantity {
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin: 20px;
}
.item-quantity button {
    min-width: 1.5em;
    margin: .5em;
}

</style>