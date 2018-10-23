<template>
    <div id="changepass">
        <div class="back-content clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
            <span class="md-title">Ubah Password</span>
        </div>
        <div class="forms-content">
            <md-field>
                <label>Password Lama</label>
                <md-input v-model="oldpassword" type="password"></md-input>
            </md-field>
            <md-field>
                <label>Password Baru</label>
                <md-input v-model="newpassword" type="password"></md-input>
            </md-field>
            <md-field>
                <label>Ketik Ulang Password</label>
                <md-input v-model="repassword" type="password"></md-input>
            </md-field>
            <button class="btn block orange btn-round button-bottom">Simpan</button>
        </div>
    </div>
</template>

<script>
    import { faTimes, faEye } from '@fortawesome/free-solid-svg-icons'
    import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

    export default {
        name: 'Login',
        data(){
            return{
                oldpassword: '',
                newpassword: '',
                repassword: '',
                fontIcons:{
                    back: faTimes,
                    showpassword: faEye,
                    facebook: faFacebookSquare,
                    google: faGoogle,
                }
            }
        },
    }
</script>

<style>

</style>
