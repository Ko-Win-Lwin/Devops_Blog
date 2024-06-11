import Home from './components/HomeView.vue'
import NewsLetter from './components/NewsLetterView.vue'
import Contact from './components/ContactView.vue'
import NotFound from './components/NotFound.vue'

import BlogList from './components/Blogs/BlogList.vue'
import BlogDetail from './components/Blogs/BlogDetail.vue'


const customRoute = [
    {
        path: "/",
        name: Home,
        component: Home
    },

    {
        path: '/blogs',
        name: 'BlogList',
        component: BlogList
    },

    {
        path: "/:user/blogs/:id",
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

    // {
    //     path: "/login",
    //     name: Login,
    //     component: Login,
    //     // if user is logged in do not allow login again 
    //     beforeEnter: (to, from, next) => {
    //         if (!store.state.data.user) {
    //             next()
    //         }
    //     }
    // },

    // {
    //     path: "/register",
    //     name: Register,
    //     component: Register,
    //     // if user is logged in do not allow register
    //     beforeEnter: (to, from, next) => {
    //         if (!store.state.data.user) {
    //             next();
    //         }
    //     }
    // },


    {
        path: '/:pathMatch(.*)',
        name: NotFound,
        component: NotFound
    },
]


export default customRoute