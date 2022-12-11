import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Profile from '../components/profile/container'
import App from '../vue/app'

const routes = [
    {
        component: Profile,
        name: "profile",
        path: "/profile"
    },
    {
        component: App,
        name: "app",
        path: "/app" 
    }

];

export default new VueRouter({
    routes //short for ` routes:routes `
}); 