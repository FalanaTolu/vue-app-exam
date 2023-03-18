<template>
    <Layout>
        <h1>Products</h1>
        <p>This is the products page</p>
        <Loader v-if="this.loading" />
        <main v-else>
            <div class="container">
                <div class="products-container" v-for="product in paginatedProducts" :key="product.id">
                    <p id="discount">-{{ product.discountPercentage }}%</p>
                    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
                    <div class="product-info">
                        <p>$<span>{{ product.price }}</span></p>
                        <p><span>{{ product.stock }} items remaining </span><span> ⭐{{ product.rating }}</span></p>
                        <p>{{ product.title }}</p>
                        <!-- <button><router-link :to="`/products/${product.id}`">Product -->
                        <button><router-link :to="{ path: '/products/' + product.id }">Product
                                Details</router-link></button>
                    </div>
                </div>

            </div>
            <nav>
                <span>Showing items {{ this.start + 1 }} to {{ this.end }} of {{ this.products?.length }}</span>
                <ul class="pagination">

                    <li><button @click.prevent="setPage(1)" class="page-link">{{ "<<" }}</button>
                    </li>

                    <li><button @click.prevent="setPage(currentPage - 1)" :disabled="currentPage === 1" class="page-link">{{
                        "<" }}</button>
                    </li>

                    <li v-for="page in pages" :key="page" class="page-item">
                        <button class="page-link" :class="{ active: currentPage === page }"
                            @click.prevent="setPage(page)">{{ page }}</button>
                    </li>

                    <li><button @click.prevent="setPage(currentPage + 1)" :disabled="currentPage === totalPages"
                            class="page-link">{{ ">" }}</button></li>

                    <li><button @click.prevent="setPage(totalPages)" class="page-link">{{ ">>" }}</button></li>

                    <li class="select-container"><select v-model="this.perPage" name="perPage" id="perPage">
                            <option>9</option>
                            <option>21</option>
                            <option>30</option>
                        </select><span>items per page</span>
                    </li>
                </ul>
            </nav>
        </main>
    </Layout>
</template>

<script>
import Layout from "@/components/layouts/LayoutComponent.vue"
import Loader from '@/components/SpinnerComponent.vue'

export default {
    components: {
        Layout,
        Loader,
    },
    data() {
        return {
            url: `https://dummyjson.com/products`,
            // url: `https://dummyjson.com/products?limit=0`,
            products: null,
            perPage: 9,
            currentPage: 1,
            loading: false,
        }
    },
    methods: {
        async getProducts() {
            try {
                let url = this.url
                this.loading = true
                await this.$store.dispatch("products/fetchProducts", { url })
                this.loading = false
                this.products = this.$store.state.products.data
            } catch (error) {
                console.log(error)
            }
        },
        setPage(page) {
            this.currentPage = page;
            if (page >= 1 && page <= this.totalPages) {
                this.$emit('page-changed', page)
            }
        },

    },
    computed: {
        start() {
            return (this.currentPage - 1) * this.perPage;
        },
        end() {
            return Math.min(this.start + this.perPage, this.products?.length);
        },
        paginatedProducts() {
            return this.products?.slice(this.start, this.end);
        },
        totalPages() {
            return Math.ceil(this.products?.length / this.perPage);
        },
        pages() {
            return Array.from({ length: this.totalPages }, (value, index) => index + 1)
        },
    },
    mounted() {
        this.getProducts()
    },
}
</script>

<style scoped>
main {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    height: 100%;
    width: 100%;
}

.container {
    /* height: 100%; */
    display: grid;
    /* grid-template-columns: 30% 30% 30%; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    /*25em */
    /* grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr; */
    border: 1px solid red;
}

.products-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    overflow: hidden;
    position: relative;
    background-color: #f0f0f080;
}

.product-image {
    max-width: 100%;
    width: auto;
    height: 70%;
}

.product-info {
    /* display: flex; */
    /* flex-direction: column; */
    text-align: left;
    margin-top: 10px;
    white-space: nowrap;
}

#discount {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.2em;
    right: 1em;
    /* right: 50%; */
    /* align-self: flex-end; */
    background-color: #f57c73;
    background-color: palevioletred;
    color: white;
    padding: 5px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3em;
    margin: 5px auto;
    padding-bottom: 5px;
    list-style: none;
    white-space: nowrap;
}

.pagination button,
select {
    min-width: 2em;
    height: 2em;
    padding: 5px;
    border-radius: 5px;
}

/* .page-link {
    background-color: aqua;
    color: white;
    border: none;
} */

.active {
    filter: brightness(60%);
    /* color: #000; */
}

nav span {
    margin: 2px auto;
    text-align: center;
}

@media (max-width: 768px) {
    .container {
        min-height: 100vw;
        grid-auto-rows: 150px;
    }


    /* .products-container {
    height: 100%;
} */
    .products-container,
    a {
        font-size: .5em;
    }

    #discount {
        padding: 5px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        font-size: .5em;
    }

    .pagination {
        /* width: 100%; */
        gap: .3em;
        border: 1px solid red;
        margin: 5px auto;
        padding-bottom: 10px;
        list-style: none;
        font-size: .5em;
    }

    nav span {
        font-size: .5em;
    }

    .pagination button,
    select,
    .select-container {
        display: flex;
        min-width: 1.5em;
        height: 1.5em;
        font-size: 1.3em;
        padding: 1px;
        justify-content: center;
        align-items: center;
    }

}
</style>