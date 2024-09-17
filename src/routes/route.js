import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/HomeView.vue"
import Login from "../pages/LoginView.vue"
import Article from "../pages/ArticleView.vue"


const routes = [
    { path: '/', component: Home },
    {
        path: '/sign-in', component: Login
    },
    {
        path: '/article', component: Article
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;