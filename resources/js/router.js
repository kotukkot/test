import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home/Home.vue'
import ListPage from '@/components/ListPage/ListPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/list',
        name: 'ListPage',
        component: ListPage
    },

    { path: '/*', redirect: { name: 'Home' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


