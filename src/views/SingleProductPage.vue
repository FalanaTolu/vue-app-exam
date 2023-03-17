<template>
    <Layout>
        <div class="product-container">
            <h2>Product {{ $route.params.id }}</h2>
            <!-- <div v-if="loading" class="loading">Loading...</div>
            <div v-if="error" class="error">{{ error }}</div> -->
            <ul class="product">
                <li><strong>{{ product.title }}</strong></li>
                <li>
                    <img :src="product.thumbnail" :alt="product.title" />
                </li>
                <li>Description:</li>
                <li>{{ product.description }}</li>
                <li><strong>Price: </strong>${{ product.price }}</li>
                <li><strong>Discount: </strong>{{ product.discountPercentage }}%</li>
                <li><strong>In Stock: </strong>{{ product.stock }}</li>
                <li><strong>Rating: </strong>{{ product.rating }}</li>
                <li><strong>Category: </strong>{{ product.category }}</li>
                <li><strong>Brand: </strong>{{ product.brand }}</li>
                <!-- <li>
               <strong>Image: </strong> 
                 <img :src="product.images?.[4]" alt=""/>
             </li> -->
            </ul>
        </div>
    </Layout>
</template>

<!-- <template>
    <div class="product">
        <h2>Product {{ $route.params.id }}</h2>
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>

        <div v-if="post" class="content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template> -->


<script>
import axios from "axios"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Layout from '@/components/layouts/LayoutComponent.vue'

export default {
    // data() {
    //     return {
    //         loading: false,
    //         error: null,
    //     }
    // },
    components: {
        Layout,
    },
    setup() {
        let product = ref({});

        const url = `https://dummyjson.com/products/`

        const route = useRoute()

        onMounted(() => {

            fetchProduct();
        })

        async function fetchProduct() {
            try {
                const res = await axios.get(url + route.params.id)
                console.log(res.data)
                product.value = res.data
            } catch (error) {
                console.log(error)
            }

        }
        // const fetchProduct = () => {
        //   fetch(url + route.params.id)
        //     .then((response) => response.json())
        //     .then((data) => {
        //       //set data gotten from API call to our breweryDetails Object
        //       breweryDetails.value = data;
        //     });
        // };
        return {
            fetchProduct,
            product,
        };
    },
};
</script>

<!-- <script>
export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null,
        }
    },
    created() {
        // watch the params of the route to fetch the data again
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        )
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true
            // replace `getPost` with your data fetching util / API wrapper
            axios.get(this.$route.params.id, (err, post) => {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.post = post
                }
            })
        },
    },
}
</script> -->

<style type="text/css">
.product-container {
    width: 100%;
}
.product{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2em;
    list-style: none;
}

.product img {
    width: 100%;
}
</style>