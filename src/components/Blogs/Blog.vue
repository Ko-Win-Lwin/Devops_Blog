<template>
    <div @click="showDetail(blog)" class="cursor-pointer my-8 md:my-12 mx-2 md:mx-auto dark:bg-stone-700 px-5 md:max-w-2xl lg:max-w-4xl md:px-10 py-6 bg-white rounded-lg
        shadow-md">
        <div class="flex justify-between items-center">
            <span class="dark:text-stone-100 text-stone-600 text-xs md:text-sm">{{ blog.date }}</span>
            <a @click.stop="filterByCategory(blog.category)"
                class="cursor-pointer relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-sm md:text-md font-medium text-gray-600 hover:bg-gray-100">{{
        blog.category }}</a>

        </div>

        <div class="mt-2">
            <a class="cursor-pointer text-lg md:text-xl leading-6 md:leading-10 dark:text-stone-100 text-stone-600 font-bold hover:underline"
                @click="showDetail(blog)">{{
        blog.title
    }}</a>
            <p class="mt-2 dark:text-stone-100 text-stone-600 line-clamp-3 text-xs md:text-sm leading-6">{{ blog.body }}
            </p>
        </div>

        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-400 text-xs hover:underline" @click="showDetail(blog)">Read more</a>
            <div>
                <a class="flex items-center" @click.stop="filterByUser(blog.userName)">
                    <img class="mx-4 w-8 h-8 md:w-10 md:h-10 object-cover rounded-full" :src="blog.image" alt="avatar">
                    <h1
                        class="cursor-pointer text-stone-600 dark:text-grey-100 hover:underline text-sm leading-6 font-semibold">
                        {{
                        blog.userName }}</h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const emit = defineEmits(['filteredBlog'])
const props = defineProps(['blog'])
const blog = props.blog
const router = useRouter()


let showDetail = (blog) => {
    router.push({ path: `${blog.userName.replace(' ', '-')}/blogs/${blog.id}` })
}

const filterByCategory = (category) => {
    router.push({ path: '/blogs', query: { category: category } })
}

const filterByUser = (user) => {
    router.push({ path: '/blogs', query: { user: user } })
}

</script>