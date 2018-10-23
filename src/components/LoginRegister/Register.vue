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
                <li><router-link to="/login">Login</router-link></li>
                <li class="active"><router-link to="/register">Sign Up</router-link></li>
            </ul>
        </div>
        <div class="forms-loginregister">
            <md-field>
                <label>Fullname</label>
                <md-input v-model="fullname"></md-input>
            </md-field>
            <md-field>
                <label>Email</label>
                <md-input v-model="email" type="email"></md-input>
            </md-field>
            <md-field>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>
            <p class="loginhere">Sudah Punya Akun Homestay? <router-link to="/login">Masuk</router-link></p>
            <button class="btn block green-light button-bottom" @click.prevent="register()">Masuk</button>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons'
    import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

    export default {
        name: 'Login',
        data(){
            return{
                apiUrl: process.env.ROOT_API,
                sectionApi: 'register',

                itemsData: [],
                errored: false,
                loading: false,

                fullname: '',
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

            register(){
                let url = this.buildUrl()
                let deviceToken = btoa( Math.random() + navigator.userAgent + Date() )
                if (/Android/i.test(navigator.userAgent)) {
                    this.deviceType = 'android'
                }else if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
                    this.deviceType = 'ios'
                }
                this.loading = true
                this.axios.post(url, {
                    full_name: this.fullname,
                    email: this.email,
                    password: this.password,
                    device_token: deviceToken,
                    device_type: this.deviceType,
                    app_version: '1.0.0',
                })
                .then(response => {
                    // this.itemsData = response.data.data
                    console.log(response)
                })
                .catch(error => { 
                    console.log(error);
                    this.errored = true
                })
            },
        },
    }
</script>

<style>

</style>
