<template>
    <div class="my-6" v-for="blog in blogs" :key="blog.id">
        <BlogArticle :blog="blog"></BlogArticle>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BlogArticle from "./BlogArticle.vue"
import data from "../../data"
import { onMounted, ref } from "vue";
let blogs = ref([]);

blogs.value = data

</script>