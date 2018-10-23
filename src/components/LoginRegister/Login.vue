<template>
    <div id="login">
        <div class="back-content clearfix">
            <a href="#"></a>
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
        </div>
        <div class="logo-center">
            <img src="../../assets/images/logo.png" alt="Logo">
        </div>
        <div class="menu-login">
            <ul>
                <li class="active"><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Sign Up</router-link></li>
            </ul>
        </div>
        <div class="forms-loginregister">
            <md-field>
                <label>Email</label>
                <md-input v-model="email" type="email"></md-input>
            </md-field>
            <md-field>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
                <router-link to="/change-pass" class="forgot-password">Lupa Password?</router-link>
            </md-field>
            <ul class="otherlogin">
                <li><a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.facebook" />Lanjutkan Menggunakan Facebook</a></li>
                <li class="google"><a href="#"><img src="../../assets/images/google-icons.png">Lanjutkan Menggunakan Google</a></li>
            </ul>
            <button class="btn block green-light button-bottom" @click.prevent="login()">Masuk</button>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons'
    import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
    import auth from '@/auth'

    export default {
        name: 'Login',
        data(){
            return{
                apiUrl: process.env.ROOT_API,
                sectionApi: 'login',

                itemsData: [],
                errored: false,
                loading: false,

                email: '',
                password: '',
                deviceType: '',
                fontIcons:{
                    back: faArrowLeft,
                    showpassword: faEye,
                    facebook: faFacebookSquare,
                    google: faGoogle,
                }
            }
        },
        methods: {
            buildUrl(){
                return this.apiUrl + this.sectionApi
            },

            login(){
                let url = this.buildUrl()
                let deviceToken = btoa( Math.random() + navigator.userAgent + Date() )
                if (/Android/i.test(navigator.userAgent)) {
                    this.deviceType = 'android'
                }else if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
                    this.deviceType = 'ios'
                }
                this.loading = true

                let credentials = {
                    type: 'email',
                    email: this.email,
                    password: this.password,
                    device_token: deviceToken,
                    device_type: this.deviceType,
                    app_version: '1.0.0',
                }
            
                // We need to pass the component's this context
                // to properly make use of http in the auth service
                auth.login(credentials, 'home')
            },
        },
    }
</script>

<style>

</style>
