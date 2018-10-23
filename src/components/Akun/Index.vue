<template>
    <div id="akun">
        <div class="back-content clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
            <span class="md-title">Akun</span>
        </div>
        <div class="contents">
            <md-field>
                <label>Titel</label>
                <md-input v-model="initial"></md-input>
            </md-field>
            <md-field>
                <label>Nama Depan</label>
                <md-input v-model="initial"></md-input>
            </md-field>
            <md-field>
                <label>Nama Belakang</label>
                <md-input v-model="initial"></md-input>
            </md-field>
            <div class="separator-forms">
                <md-field class="small">
                    <label>Kode Negara</label>
                    <md-input v-model="initial"></md-input>
                </md-field>
                <md-field>
                    <label>No Telfon</label>
                    <md-input v-model="initial"></md-input>
                </md-field>
            </div>
            <div class="change-able show">
                <md-field>
                    <label>Password</label>
                    <md-input type="password" v-model="initial" disabled></md-input>
                </md-field>
                <md-field>
                    <label>Email</label>
                    <md-input type="email" v-model="initial" disabled></md-input>
                </md-field>
                <a href="#">Ubah</a>
            </div>
            <button class="btn block orange btn-round">Simpan</button>
            <a href="#" class="logout"><font-awesome-icon class="fontIcons" :icon="fontIcons.logout" /> Keluar</a>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Promo',
        data(){
            return{
                initial: '',
                oldpassword: '',
                newpassword: '',
                repassword: '',
                fontIcons:{
                    back: faArrowLeft,
                    logout: faSignOutAlt,
                }
            }
        },
    }
</script>

<style lang="scss">
    #akun{
        .change-able{
            position: relative;
            .md-toggle-password{
                display: none;
            }
            a{
                position: absolute;
                top: 25px;
                right: 0;
                color: #4bb03a;
            }
            &.show{
                
            }
        }   
        .logout{
            padding: 15px;
            display: block;
            margin-top: 15px;
            font-size: 16px;
            color: #4bb03a;
        }     
    }
</style>
