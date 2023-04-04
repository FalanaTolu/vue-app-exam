<template>
    <Layout>
        <div class="product-container">
            <Loader v-if="loading" />
            <ul class="product" v-else>
                <li><strong>{{ product.title }}</strong></li>
                <li class="thumbnail-container">
                    <img :src="currentImage" :alt="product.title" />
                </li>
                <li class="images-container">
                    <img v-for="image in product.images" :key="image" :src="image" class="images"
                        :class="{ active: currentImage === image }" :alt="image" @click.prevent="setImage(image)" />
                </li>
                <li style="margin-top : 20px"><strong>Description:</strong></li>
                <li>{{ product.description }}</li>
                <li><strong>Price: </strong>${{ product.price }}</li>
                <li><strong>Discount: </strong>{{ product.discountPercentage }}%</li>
                <li><strong>In Stock: </strong>{{ product.stock }}</li>
                <li><strong>Rating: </strong>{{ product.rating }}</li>
                <li><strong>Category: </strong>{{ product.category }}</li>
                <li><strong>Brand: </strong>{{ product.brand }}</li>
                <li><button type="button" @click="addToCart(product)">Add to Cart</button></li>
            </ul>
        </div>
    </Layout>
</template>

<script>
import axios from "axios"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Layout from '@/components/layouts/LayoutComponent.vue'
import Loader from '@/components/SpinnerComponent.vue'

export default {
    components: {
        Layout,
        Loader,
    },
    methods: {
        setImage(image) {
            this.currentImage = image
        },
        addToCart(product) {
            // this.$store.dispatch("cart/addToCart", product);
            this.$store.dispatch("cart/addToCart", product).then(() => this.$router.push('/cart')).catch((error) => console.log(error.message))
        },
    },
    setup() {
        let product = ref({});
        let loading = ref();
        let currentImage = ref()

        const url = `https://dummyjson.com/products/`

        const route = useRoute()

        onMounted(() => {

            fetchProduct();
        })

        async function fetchProduct() {
            try {
                loading.value = true
                const res = await axios.get(url + route.params.id)
                loading.value = false
                product.value = res.data
                currentImage.value = product.value.thumbnail
            } catch (error) {
                console.log(error)
            }

        }
        return {
            loading,
            fetchProduct,
            product,
            currentImage,
        };
    },
};
</script>

<!-- <script setup>
import axios from "axios"
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import Layout from '@/components/layouts/LayoutComponent.vue'
import Loader from '@/components/SpinnerComponent.vue'
import store from "@/store"

let product = ref({});
let loading = ref(false);
let currentImage = ref()

const url = `https://dummyjson.com/products/`
const route = useRoute()
const router = useRouter()

const setImage = (image) => { currentImage.value = image };

//const removeFromCart = (product) => { this.$store.dispatch("cart/removeFromCart", product)};

//const someFunction = computed(() => { this.currentImage = image });

onMounted(() => { fetchProduct() })

async function fetchProduct() {
    try {
        loading.value = true
        const res = await axios.get(url + route.params.id)
        loading.value = false
        product.value = res.data
        currentImage.value = product.value.thumbnail
    } catch (error) {
        console.log(error)
    }
}

const addToCart = (product) => { store.dispatch("cart/addToCart", product).then(() => router.push('/cart')).catch((error) => console.log(error.message)) };

</script> -->

<style type="text/css" scoped>
.product-container {
    width: 100%;
}

.product {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2em;
    list-style: none;
}

.thumbnail-container {
    height: 100%;
    width: 100%;
}

.thumbnail-container img {
    height: 300px;
    width: auto;
}

.images-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.images {
    width: 50px;
    height: 50px;
    border: 3px solid #0082cf;
}

.active {
    border: 3px solid #f00;
}

@media (max-width: 768px) {
    .thumbnail-container img {
        height: auto;
        max-width: 100%;
    }
}
</style>