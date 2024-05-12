import Home from './components/HomeView.vue'
import NewsLetter from './components/NewsLetterView.vue'
import Contact from './components/ContactView.vue'
import Login from './components/LoginView.vue'
import Register from "./components/RegisterView.vue"
import Dashboard from './components/DashboardView.vue'

import userStore from './store/userStore';


const store = userStore


const customRoute = [
    { path: "/", component: Home },

    { path: "/home", component: Home },

    { path: "/newsletter", component: NewsLetter },

    { path: "/contact", component: Contact },

    {
        path: "/login",
        component: Login,
        // if user is logged in do not allow login again 
        beforeEnter: (to, from, next) => {
            if (!store.state.data.user) {
                next()
            }
        }
    },

    {
        path: "/register",
        component: Register,
        // if user is logged in do not allow register
        beforeEnter: (to, from, next) => {
            if (!store.state.data.user) {
                next()
            }
        }
    },

    {
        path: "/Dashboard",
        component: Dashboard,
        // only allow if user is logged in and user is an admin
        beforeEnter: (to, from, next) => {
            if (store.state.data.user && store.state.data.user.user.role == 'admin') {
                next()
            }
        }
    }
]


export default customRoute