import Home from './components/HomeView.vue'
import NewsLetter from './components/NewsLetterView.vue'
import Contact from './components/ContactView.vue'
import Register from './components/Auth/RegisterView.vue'
import Login from "./components/Auth/LoginView.vue"
import NotFound from './components/NotFound.vue'


import Dashboard from './components/Dashboard/DashboardView.vue'
import WriteBlog from './components/Dashboard/WriteBlog.vue'

import userStore from './store/userStore';
import BlogDetail from './components/Blogs/BlogDetail.vue'
import BlogList from "./components/Blogs/BlogList.vue"


const store = userStore


const customRoute = [
    {
        path: "/",
        name: Home,
        component: Home
    },

    {
        path: "/blogs",
        name: BlogList,
        component: BlogList,
    },
    {
        path: "/blogs/:id",
        name: BlogDetail,
        component: BlogDetail,
    },

    {
        path: "/home",
        name: Home,
        component: Home
    },

    {
        path: "/newsletter",
        name: NewsLetter,
        component: NewsLetter
    },

    {
        path: "/contact",
        name: Contact,
        component: Contact
    },

    {
        path: "/login",
        name: Login,
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
        name: Register,
        component: Register,
        // if user is logged in do not allow register
        beforeEnter: (to, from, next) => {
            if (!store.state.data.user) {
                next();
            }
        }
    },

    {
        path: "/Dashboard",
        name: Dashboard,
        component: Dashboard,
        // only allow if user is logged in and user is an admin
        beforeEnter: (to, from, next) => {
            if (store.state.data.user && store.state.data.user.user.role == 'admin') {
                next()
            }
        },

        children: [
            {
                path: "write",
                name: WriteBlog,
                component: WriteBlog,
            }
        ]
    },

    {
        path: '/:pathMatch(.*)',
        name: NotFound,
        component: NotFound
    },
]


export default customRoute