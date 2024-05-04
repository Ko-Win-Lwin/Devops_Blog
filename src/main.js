import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router';
import './style.css'
import App from './App.vue'
import Home from "./components/HelloWorld.vue"
import About from "./components/About.vue"

const routes = [
    
] 

const router = createRouter({ 
    history: createWebHistory(), 
    routes 
})

const app = createApp(App);
app.use(router);
app.mount('#app')

