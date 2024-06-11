<template>
    {{ loading }}
    <div class="mt-6 mx-auto dark:bg-stone-700 max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <div class="flex justify-between items-center mt-4">
                <div>
                    <a class="flex items-center" href="#">
                        <img class="mr-8 w-10 h-10 object-cover rounded-full hidden sm:block" :src="blog.image"
                            alt="avatar">
                        <h1 class="dark:text-stone-100 text-sky-600 font-bold hover:underline">{{ blog.userName
                            }}
                        </h1>
                    </a>
                </div>
            </div>

            <span class="dark:text-stone-100 text-stone-600 text-sm">{{ blog.date }}</span>
        </div>
        <div class="mt-6">
            <div class="text-xl leading-10 dark:text-stone-100 text-stone-600 font-bold" href="#">{{
        blog.title
    }}</div>
            <p class="mt-2 dark:text-stone-100 text-stone-600">{{ blog.body }}</p>
        </div>

        <div class="mt-10 flex items-center gap-12 text-lg">
            <div class="flex items-center gap-2">
                <p class="text-sm">{{ 10 }}</p>
                <i v-if="isLiked" @click="like()" class="fa-solid fa-thumbs-up "></i>
                <i v-else @click="like()" class="fa-regular fa-thumbs-up "></i>
            </div>
            <div class="flex items-center gap-2">
                <p class="text-sm">{{ 10 }}</p>
                <i v-if="isDisliked" @click="dislike()" class="fa-solid fa-thumbs-down text-lg mt-1"></i>
                <i v-else @click="dislike()" class="fa-regular fa-thumbs-down text-lg mt-1"></i>
            </div>
        </div>

    </div>


</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import data from "../../data"
let blog = ref({})
const isLiked = ref(false)
const isDisliked = ref(false)

let route = useRoute()
const findBlogById = (id) => {
    return data.find((blog) => {
        return blog.id === parseInt(id)
    })
}

const like = () => {
    isLiked.value = !isLiked.value
}

const dislike = () => {
    isDisliked.value = !isDisliked.value
}

onMounted(async () => {
    blog.value = await findBlogById(route.params.id)
})


</script>