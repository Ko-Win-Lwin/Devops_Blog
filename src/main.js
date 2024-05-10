import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import Home from './components/HomeView.vue'
import NewsLetter from './components/NewsLetterView.vue'
import Contact from './components/ContactView.vue'
import Login from './components/LoginView.vue'
import Register from "./components/RegisterView.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/newsletter", component: NewsLetter },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/register", component: Register }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app')

