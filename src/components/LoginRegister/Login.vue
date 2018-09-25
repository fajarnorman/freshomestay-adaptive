<template>
    <div id="login">
        <div class="back-content clearfix">
            <a href="#"></a>
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
        </div>
        <div class="logo-center">
            <img src="../../assets/logo.png" alt="Logo">
        </div>
        <div class="menu-login">
            <ul>
                <li class="active"><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
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
            </md-field>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Login',
        data(){
            return{
                email: '',
                password: '',
                fontIcons:{
                    back: faArrowLeft,
                    showpassword: faEye,
                }
            }
        },
    }
</script>

<style>

</style>
