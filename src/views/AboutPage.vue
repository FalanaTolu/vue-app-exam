<template>
    <div>
        <Layout>
            <div class="main">
            <h1>About</h1>
            <p>This is the about page</p></div>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/layouts/LayoutComponent.vue'

export default {
    components: {
        Layout,
    }
}
</script>

<style scoped>
.main {
    height: 100%;
}
</style>