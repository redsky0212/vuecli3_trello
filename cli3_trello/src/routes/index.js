import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const Main = { template: '<div>main page</div>' };
const Login = {template:'<div>Login page</div>'};


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name:'main',  component:Main},
        { path:'/login', name:'login', component:Login}
        // { path: '/news', name: 'news', component: NewsView },
        // { path: '/ask', name: 'ask', component: AskView },
        // { path: '/jobs', name: 'jobs', component: JobsView },
        // { path: '/user/:id', component: UserView },
        // { path: '/item/:id', component: ItemView }
    ]
})

export default router;