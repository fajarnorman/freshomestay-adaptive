import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home/Home.vue'
import LoginPage from '@/components/LoginRegister/Login.vue'
import RegisterPage from '@/components/LoginRegister/Register.vue'
import ChangePassPage from '@/components/LoginRegister/ChangePass.vue'
import PromoPage from '@/components/Promo/Index.vue'
import DetailPromoPage from '@/components/Promo/Detail.vue'
import PesananPage from '@/components/Pesanan/Index.vue'
import MenuPage from '@/components/Menu/Index.vue'
import AkunPage from '@/components/Akun/Index.vue'
import ListingPage from '@/components/Listing/Index.vue'
import DetailListingPage from '@/components/Listing/Detail.vue'

Vue.use(Router)

const routes = [
    { path: '/', name: 'HelloWorld', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/change-pass', name: 'ChangePassword', component: ChangePassPage },
    { path: '/promo', name: 'Promo', component: PromoPage },
    { path: '/promo/detail/', name: 'Promo', component: DetailPromoPage },
    { path: '/menu', name: 'Menu', component: MenuPage },
    { path: '/pesanan/aktif', name: 'Pesanan', component: PesananPage },
    { path: '/pesanan/selesai', name: 'Pesanan', component: PesananPage },
    { path: '/akun', name: 'Akun', component: AkunPage },
    { path: '/listing', name: 'Listing', component: ListingPage },
    { path: '/listing/detail', name: 'DetailListing', component: DetailListingPage },
]

export default new Router({
    base: '/',
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
