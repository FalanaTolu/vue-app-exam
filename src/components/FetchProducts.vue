<template>
    <div class="search-bar">
        <p>Search Dad jokes with term:</p>
        <input v-model="term" @keyup.enter="submit"/>
        <button v-show="term" @click.prevent="submit">Submit</button>
    </div>
    <div class="container">
        <div class="jokes" v-for="joke in data.results" :key="joke.id">
            <div class="joke">
                <p>{{ joke.joke }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios"

export default {
    name: 'DadJokesMore',
    data() {
        return {
            data: [],
            term: "",
            searchParam: "",
            isLoading: true,
        }
    },
    mounted() {
        this.getJokes()
    },
    methods: {
        submit() {
            this.searchParam = this.term
            // console.log(this.searchParam)
        },
        async getJokes() {
            axios.get(`https://icanhazdadjoke.com/search?term=${this.searchParam}`, {
                headers: {
                    Accept: "application/json",
                },
            })
                .then((res) => res.data)
                .then((data) => (this.data = data))
                .catch((error) => console.log(error))
                .finally(() => (this.isLoading = false));
        }
    },
    watch: {
        searchParam: function (oldValue, newValue) {
            if (oldValue != newValue) {
                this.getJokes()
            }
        }
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
    color: #42b983;
}

.container {
    margin-top: 5px;
}

.jokes {
    background-color: rgb(226, 226, 226);
    border: 1px solid grey;
}
</style>
  