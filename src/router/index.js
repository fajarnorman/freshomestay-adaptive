import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home/Home.vue'
import LoginPage from '@/components/LoginRegister/Login.vue'
import RegisterPage from '@/components/LoginRegister/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'HelloWorld', component: HomePage },
        { path: '/login', name: 'Login', component: LoginPage },
        { path: '/register', name: 'Register', component: RegisterPage }
    ]
})
