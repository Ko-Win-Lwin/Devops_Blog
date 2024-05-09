<template>
    <header class="bg-blue-400 dark:bg-stone-800 text-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between py-8 lg:px-8" aria-label="Global">
      <!-- logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          Zin Lin Htet Logo
        </a>
      </div>
      
      <div class="hidden lg:flex lg:gap-x-12 ">
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

      <div class="flex flex-1 gap-8 md:gap-12 justify-end items-center">
        <i class="fa-solid fa-magnifying-glass text-lg mt-1 cursor-pointer"></i>
        <div class="w-2">
          <i v-if="isDark" class="fa-solid text-lg fa-sun cursor-pointer" @click="toggleDark()"></i>
          <i v-else class="fa-solid fa-moon text-lg cursor-pointer" @click="toggleDark()"></i>
        </div>

        <RouterLink to="/login">
          <span href="#" class="hidden lg:flex text-md font-semibold leading-6  text-white">Register</span>
        </RouterLink>

        <RouterLink to="/login">
          <span href="#" class="hidden lg:flex text-md font-semibold leading-6  border border-slate-300 rounded-full px-3  text-white">Log in <span aria-hidden="true">&rarr;</span></span>
        </RouterLink>
      </div>

      <!-- humberger menu medium -->
      <div class="flex lg:hidden">
        <button type="button" @click="toggleSubmenu()" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>


    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="" role="dialog" aria-modal="true" v-if="isSubmenuShow">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            Zin Lin Htet Logo
          </a>
          <button type="button" @click="toggleSubmenu()" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mt-8 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-8 py-6">
              <div class="-mx-6">
                <!-- sub-menu -->
                <div class="mt-2 space-y-4 flex flex-col" id="disclosure-1">
                  <RouterLink to="/home">
                    <span class="block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</span>
                  </RouterLink>
                  <RouterLink to="/newsletter">
                    <span class="block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Newsletter</span>
                  </RouterLink>
                  <RouterLink to="/contact">
                    <span class="block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</span>
                  </RouterLink>
                  <RouterLink to="/login">
                    <span class="block rounded-lg pyh-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</span>
                  </RouterLink>
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

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isSubmenuShow = ref(false)

const toggleSubmenu = () => {
  isSubmenuShow.value = !isSubmenuShow.value
}

onMounted(() => {
  window.addEventListener('resize', () => {
    console.log("resizing")
    isSubmenuShow.value = false
  })
})



</script>