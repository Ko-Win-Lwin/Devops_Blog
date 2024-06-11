import { RouterLink } from 'vue-router';
<template>
    <main class="grid min-h-full place-items-center dark:bg-stone-800 px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="font-semibold text-3xl text-sky-500">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">Page not
                found</h1>
            <p class="mt-6 text-base leading-7 text-stone-600 dark:test-stone-100">Sorry, we couldn’t find the page
                you’re looking for.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <RouterLink to="/home"
                    class="border border-sky-600 rounded-full px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-600 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-100">
                    Go
                    back home</RouterLink>

            </div>
        </div>
    </main>

</template>

<script setup>

</script>
