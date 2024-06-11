<template>
    <blog v-for="blog in filteredBlog" :key="blog.id" :blog="blog"></blog>
</template>

<script setup>
import blog from "./Blog.vue"
import data from "../../data"
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const blogs = ref([])
const route = useRoute()
blogs.value = data

const query = computed(() => route.query)

const filteredBlog = computed(() => {

    if (query.value.user) {
        return blogs.value.filter(blog => blog.userName === query.value.user)
    }

    if (query.value.category) {
        return blogs.value.filter(blog => blog.category === query.value.category)
    }

    return blogs.value
})


// watching route query if change reload page
watchEffect(query, filteredBlog, { immediate: true })


</script>