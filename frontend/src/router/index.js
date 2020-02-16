import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import Favoris from './../components/Favoris.vue'
import Single from './../components/Single.vue'
import Login from './../components/Login.vue'
import Register from './../components/Register.vue'
import Single from './../components/Single.vue'



Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage },
        { path: '/favoris', component: Favoris },
        { path: '/favoris/:id', component: Single },
        { path: '/register', component: Register },
        { path: '/:id', component: Single },

    ]
})