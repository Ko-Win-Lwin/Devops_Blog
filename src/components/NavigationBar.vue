<template>
    <header class="bg-blue-400 dark:bg-stone-700 shadow dark:shadow-stone-800 text-white">
    <nav class="mx-auto max-w-7xl flex items-center justify-between py-8 px-6 md:px-8" aria-label="Global">
      <!-- logo -->
      <div class="flex flex-1 w-[25%]">
        <a href="#" class="-m-1.5 p-1.5">
          Zin Lin Htet Logo
        </a>
      </div>
      
      <div class="hidden lg:flex lg:gap-x-20 w-[40%]">
        <RouterLink to="/home">
          <span class="text-md font-semibold leading-6 text-white">Home</span>
        </RouterLink>
        <RouterLink to="/newsletter">
          <span class="text-md font-semibold leading-6 text-white">Newsletter</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span class="text-md font-semibold leading-6 text-white">Contact</span>
        </RouterLink>
        
      </div>

      <div class="flex float-end md:ml-auto mr-8 md:mr-12 lg:mr-0 justify-center items-center lg:gap-12 w-[30%]">
        
        <div class="flex justify-center items-center gap-12 md:gap-16"> 
          <i class="fa-solid fa-magnifying-glass text-xl cursor-pointer w-6"></i>
          <i v-if="isDark" class="fa-solid text-xl fa-sun cursor-pointer w-6" @click="toggleDark()"></i>
          <i v-else class="fa-solid fa-moon text-xl cursor-pointer w-6" @click="toggleDark()"></i>
        </div>

        <div v-if="!store.state.data.user">
          <RouterLink to="/register">
          <span class="hidden lg:flex text-md font-semibold leading-6  text-white">Register</span>
        </RouterLink>
        </div>


        <div v-if="!store.state.data.user">
          <button @click="login()">
            <span class="hidden lg:flex text-md font-semibold leading-6  border border-slate-300 rounded-full px-3  text-white">Log in <span aria-hidden="true">&rarr;</span></span>
          </button>
        </div>

        <div v-if="store.state.data.user">
          <span class="hidden lg:flex">{{ store.state.data.user.user.name }}</span>
        </div>

        <button v-if="store.state.data.user" class="hidden lg:flex border px-3 rounded-md" @click="logout">
          Logout
        </button>
      </div>

      <!-- humberger menu medium -->
      <div class="flex lg:hidden">
        <button type="button" @click="toggleSubmenu()" class="-m-2.5 text-white inline-flex items-center justify-center rounded-md p-2.5">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>


    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="" role="dialog" aria-modal="true" v-if="isSubmenuShow">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-stone-800 px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1 p-1.5">
            Zin Lin Htet Logo
          </a>
          <button type="button" @click="toggleSubmenu()" class="-m-2.5 rounded-md p-2.5 text-stone-700 dark:text-white">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
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
                    <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Home</span>
                  </RouterLink>
                  <RouterLink to="/newsletter">
                    <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Newsletter</span>
                  </RouterLink>
                  <RouterLink to="/contact">
                    <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Contact</span>
                  </RouterLink>
                  <RouterLink to="/register">
                    <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Register</span>
                  </RouterLink>
                  <div v-if="!store.state.data.user">
                    <button  @click="login()">
                      <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Log in</span>
                    </button>
                  </div>
                  
                  <div v-else>
                    <button @click="logout()">
                      <span class="dark:text-white block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-600 hover:bg-gray-50">Log out</span>
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
</template>

<script setup>

import { ref, onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";
import userStore from "../store/userStore"

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isSubmenuShow = ref(false)
const store = userStore

const toggleSubmenu = () => {
  isSubmenuShow.value = !isSubmenuShow.value
}

onMounted(() => {
  window.addEventListener('resize', () => {
    isSubmenuShow.value = false
  })  
})

const router = useRouter()

router.afterEach((to, from) => {
  isSubmenuShow.value = false
})

const logout = () => {
  store.commit("logout")
  router.push("/login")
}

const login = () => {
  const user = JSON.parse(localStorage.getItem('userStore'))
  if (user) {
    store.commit("setUser", JSON.parse(localStorage.getItem('userStore')))
    router.push("/home")
  } else {
    router.push("/login")
  }
}

</script>
