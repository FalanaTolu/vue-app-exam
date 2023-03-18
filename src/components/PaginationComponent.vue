<template>
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
</template>
  
<script>
export default {
    data() {
        return {
            // products: null,
            loading: false,
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        //  totalPages: {
        //     type: Number,
        //     required: true
        // },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.products?.length / this.perPage);
        },
        pages() {
            return Array.from({ length: this.totalPages }, (value, index) => index + 1)
        },
                      // paginate() {
        //     {fetchedData?.results.slice(offset, offset + perPage).map((subscriber, index) => (
        // }
        // totalPages() {
        //     const perPage = 9; // skip is amount of items to jump, limit is amount to display per page
        //     const totalProducts = this.productList?.products?.length
        //     return Math.ceil(totalProducts / perPage);
        // },
        // isLoading() {
        //     return this.$store.state.products.loading
        // },
    },
    methods: {
        search() {
            // const search = this.$route.query.search;
            // if (search) {
            //     this.search = search;
            // }
            //     fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
            //         .then(res => res.json())
            //         .then(console.log);
        },
        setPage(page) {
            this.currentPage = page;
            if (page >= 1 && page <= this.totalPages) {
                this.$emit('page-changed', page)
            }
        },
           // setPerPage(perPage) {
        //     this.perPage = perPage;
        // },
        // setLoading(loading) {
        //     this.loading = loading;
        // },
        // nextPage() {

        // }, 
        // previousPage() {

        // },
        // async getProducts() {
        //     try {
        //         let url = this.url
        //         this.loading = true
        //         // this.setLoading(true)
        //         console.log("Loading:", this.loading)
        //         // let perPage =  this.perPage
        //         // await this.$store.dispatch("products/fetchProducts")
        //         await this.$store.dispatch("products/fetchProducts", { url })
        //         // console.log(this.$store.state.products.productList)
        //         // this.setLoading(false)
        //         this.loading = false
        //         console.log("Loading:", this.loading)
        //         this.products = this.$store.state.products.data
        //         console.log("Products:", this.$store.state.products.data)
        //         console.log("Productslocal:", this.products);
        //         console.log("ProductType:", typeof (this.products));
        //         console.log("TotalPages:", this.totalPages)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
    },
    // setup() {

    //     const url = `https://dummyjson.com/products?limit=0&skip=0`

    //     let productList = ref([])
    //     let perPage = 9
    //     let totalPages = ref(0)

    //     onMounted(() => { fetchProducts() })

    //     async function fetchProducts() {
    //         store.commit('auth/setLoading', true)
    //         try {
    //             const res = await axios.get(url)
    //             productList.value = res.data
    //             store.commit('auth/setLoading', false)
    //             const totalProducts = productList?.value.total
    //             totalPages = Math.ceil(totalProducts / perPage)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     // console.log(productList.value)
    //     return {
    //         totalPages,
    //         productList,
    //         fetchProducts,
    //     }

    // }
}
</script>
  
<style scoped>
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