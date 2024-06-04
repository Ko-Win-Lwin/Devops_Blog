<template>
    <div @click="showDetail(blog.id)" class=" mx-auto dark:bg-stone-700 max-w-4xl px-10 py-6 bg-white rounded-lg
        shadow-md">
        <div class="flex justify-between items-center">
            <span class="dark:text-stone-100 text-stone-600">{{ blog.date }}</span>
            <a class="px-8 py-1 bg-sky-600 text-stone-100 font-bold rounded hover:bg-sky-500" href="#">{{ blog.tag
                }}</a>
        </div>
        <div class="mt-2">
            <a class="text-xl leading-10 dark:text-stone-100 text-stone-600 font-bold hover:underline" href="#">{{
        blog.title
    }}</a>
            <p class="mt-2 dark:text-stone-100 text-stone-600">{{ blog.body }}</p>
        </div>
        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-400 text-sm hover:underline" href="#">Read more</a>
            <div>
                <a class="flex items-center" href="#">
                    <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" :src="blog.image"
                        alt="avatar">
                    <h1 class="text-sky-600 dark:text-stone-100 font-bold hover:underline">{{ blog.userName }}</h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const props = defineProps(['blog'])
const blog = props.blog
let router = useRouter()

let showDetail = (id) => {
    console.log(id)
    router.push({ path: `/blogs/${id}` })
}
</script>