import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/MainView.vue';
import Login from '../views/LoginView.vue';
import NotFound from '../views/NotFoundView.vue';

Vue.use(VueRouter);



const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/main' },
        { path:'/main', name:'main',  component:Main},
        { path: '/login', name: 'main', component: Login },
        { path:'*', component: NotFound }
    ]
})

export default router;