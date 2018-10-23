<template>
    <div id="menu">
        <div class="menu-header">
            <span>Menu</span>
            <div v-if="loggedin == null">
                <div class="md-layout md-gutter" style="margin-top: 10px;">
                    <div class="md-layout-item">
                        <img src="../../assets/images/menu.png" alt="">
                    </div>
                    <div class="md-layout-item">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                </div>
                <!-- <button class="btn block orange btn-round" @click="route.push({ path: '/login' })">Masuk / Daftar</button> -->
                <router-link class="btn block orange btn-round" to="/login" tag="button">Masuk / Daftar</router-link>
            </div>
            <div v-else>
                <div class="user-profile">Selamat Datang, <span>{{loggedinName}}</span></div>
            </div>
        </div>
        <div class="content-menu">
            <div class="menu-item first">
                <a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.question" /> Homestay Partner</a>
            </div>
            <div class="menu-item first">
                <a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.question" /> Bantuan</a>
            </div>
            <div class="menu-item first">
                <a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.question" /> Bantuan</a>
            </div>
            <div class="menu-item">
                <span>Layanan Pelanggan</span>
                <ul>
                    <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.phone" /> 0811-3345-6789 <span>Via Telefon</span></a></li>
                    <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.email" /> homestay@gmail.com <span>Via Email</span></a></li>
                    <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.email" /> homestay@gmail.com <span>Via Email</span></a></li>
                    <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.email" /> homestay@gmail.com <span>Via Email</span></a></li>
                </ul>
            </div>
            <div class="menu-item">
                <span>Layanan Pelanggan</span>
                <ul>
                    <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.phone" /> 0811-3345-6789 <span>Via Telefon</span></a></li>
                </ul>
            </div>
        </div>
        <menu-component />
    </div>
</template>

<script>
    import {  faQuestionCircle, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import MenuComponent from '../partials/menuBottom.vue'

    export default {
        name: 'Pesanan',
        data(){
            return{
                loggedin: localStorage.getItem('login'),
                loggedinName: localStorage.getItem('login_name'),

                oldpassword: '',
                newpassword: '',
                repassword: '',
                fontIcons:{
                    question: faQuestionCircle,
                    phone: faPhone,
                    email: faEnvelope,
                }
            }
        },
        components: {MenuComponent}
    }
</script>

<style>

</style>
