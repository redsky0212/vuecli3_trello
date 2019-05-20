import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/LoginView.vue';
import NotFound from '../views/NotFoundView.vue';

import Board from '../views/Board.vue';
import Card from '../views/Card.vue';
import {store} from '../store';

Vue.use(VueRouter);

const requireAuth = ( to, from, next ) => {
    const loginPath = `/login?rPath=${encodeURIComponent( to.path )}`;
    store.getters.isAuth ? next() : next(loginPath);
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/home', beforeEnter: requireAuth },
        { path: '/home', name: 'home', component: Home, beforeEnter: requireAuth},
        { path: '/login', name: 'login', component: Login },
        {
            path: '/b/:bid', component: Board, beforeEnter: requireAuth, children:[
                { path: 'c/:cid', component: Card }
            ] 
        },
        { path:'*', component: NotFound }
    ]
})

export default router;