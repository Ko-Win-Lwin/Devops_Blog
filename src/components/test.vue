<template>
    <header class=" dark:bg-stone-700 shadow dark:shadow-none py-4 text-stone-900">
        <nav class="mx-auto flex items-center justify-between px-4">
            <!-- logo -->
            <div class="">
                <a href="#" class="dark:text-stone-100">
                    <img src="" alt="" class="w-12">
                </a>
            </div>

            <!-- center nav item -->
            <div class="ml-auto hidden lg:flex gap-16">
                <RouterLink to="/home">
                    <span class="text-sm font-medium leading-6 dark:text-stone-100 text-stone-600">Home</span>
                </RouterLink>
                <RouterLink to="/newsletter">
                    <span class="text-sm font-medium leading-6 dark:text-stone-100 text-stone-600">Newsletter</span>
                </RouterLink>
                <RouterLink to="/contact">
                    <span class="text-sm font-medium leading-6 dark:text-stone-100 text-stone-600">Contact</span>
                </RouterLink>
                <div v-if="false">
                    <button v-if="false" @click="write()">
                        <span
                            class="text-sm font-medium leading-6 dark:text-stone-100  rounded-full px-4 py-2 border border-sky-600 hover:bg-sky-600  text-sky-600 hover:text-white dark:border-stone-100  dark:hover:bg-stone-100 dark:hover:text-stone-600"><i
                                class="fa-solid fa-pencil mr-1"></i> Write</span>
                    </button>
                </div>
            </div>

            <!-- side nav items -->
            <div class="flex justify-between md:ml-auto lg:gap-12 items-center">

                <!-- fancy icon -->
                <div class="flex justify-between items-center gap-12 dark:text-stone-100">
                    <i class="block fa-solid fa-magnifying-glass text-lg cursor-pointer "></i>
                    <i v-if="isDark" class="block fa-solid text-md fa-sun cursor-pointer" @click="toggleDark()"></i>
                    <i v-else class="block fa-solid fa-moon text-lg cursor-pointer" @click="toggleDark()"></i>

                    <!-- humberger menu medium -->
                    <button type="button" @click="toggleSubmenu()"
                        class="lg:hidden text-stone-600 dark:text-stone-100 items-center justify-center rounded-md">
                        <i class="fa-solid fa-bars text-lg"></i>
                    </button>
                </div>

                <!-- log in log out button -->
                <div class="lg:flex items-center gap-8 hidden">
                    <div v-if="false">
                        <button @click="login()">
                            <span
                                class="hidden lg:flex text-sm font-medium leading-6  rounded-full px-4 py-1 border border-sky-600 hover:bg-sky-600  text-sky-600 hover:text-white dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-600">Log
                                in →</span>
                        </button>
                    </div>

                    <div v-if="false">
                        <RouterLink to="/register">
                            <span
                                class="hidden lg:flex text-sm font-medium leading-6  rounded-full px-4 py-1 border border-sky-600 hover:bg-sky-600  text-sky-600 hover:text-white dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-600">Register
                            </span>
                        </RouterLink>
                    </div>

                    <button false
                        class="hidden lg:flex text-sm font-medium leading-6  rounded-full px-4 py-1 border border-sky-600 hover:bg-sky-600  text-sky-600 hover:text-white dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-600"
                        @click="logout">
                        Log Out
                    </button>

                    <div false>
                        <span class="hidden text-sm  lg:flex text-stone-600 dark:text-stone-100">Win Lwin</span>
                    </div>
                </div>
            </div>

        </nav>


        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="" role="dialog" aria-modal="true" v-if="isSubmenuShow">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-stone-100 dark:bg-stone-800 px-4 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="dark:text-stone-100">
                        <img src="" alt="" class="w-12">
                    </a>

                    <button type="button" @click="toggleSubmenu()"
                        class="-m-2.5 rounded-md p-2.5 text-stone-700 dark:text-white">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="mt-8 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10 ">
                        <div class="space-y-8 py-6">
                            <div class="-mx-6">
                                <!-- sub-menu -->
                                <div class="mt-2 space-y-4 flex flex-col" id="disclosure-1">
                                    <RouterLink to="/home">
                                        <span
                                            class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Home</span>
                                    </RouterLink>
                                    <div false>
                                        <RouterLink to="/dashboard" v-if="false">
                                            <span
                                                class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Dashboard</span>
                                        </RouterLink>
                                    </div>

                                    <RouterLink to="/newsletter">
                                        <span
                                            class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Newsletter</span>
                                    </RouterLink>
                                    <RouterLink to="/contact">
                                        <span
                                            class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Contact</span>
                                    </RouterLink>
                                    <RouterLink to="/register">
                                        <span
                                            class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Register</span>
                                    </RouterLink>
                                    <div v-if="false">
                                        <button @click="login()">
                                            <span
                                                class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Log
                                                in</span>
                                        </button>
                                    </div>

                                    <div v-else>
                                        <button @click="logout()">
                                            <span
                                                class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Log
                                                out</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="bg-white py-24 sm:py-32">
        <div class="px-6 lg:px-8">
            <div
                class="mx-auto mt-10 grid max-w-2xl  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article class=" max-w-xl items-start justify-between">
                    <div class=" items-center gap-x-4 text-xs">
                        <time class="text-gray-500">{{ blog.date }}</time>

                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a>
                                <span class="absolute inset-0" />
                                {{ blog.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ blog.body }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img :src="blog.image" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a>
                                    <span class="absolute inset-0" />
                                    {{ blog.userName }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ admin }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>


</template>