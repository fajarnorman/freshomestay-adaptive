<template>
    <div id="promo">
        <div class="back-content clearfix">
            <span class="md-title">Pesanan Saya</span>
        </div>
        <div class="contents content-menu">
            <md-tabs md-sync-route class="min-padd-left-right" md-alignment="fixed">
                <md-tab id="tab-home" md-label="Aktif" to="/pesanan/aktif">
                    <div class="no-pesanan-aktif">
                        <img src="../../assets/images/pesanan-empty.png" alt="">
                        <h5>Tidak ada pesanan aktif</h5>
                        <p>Pesanan yang sedang aktif akan tampil di sini</p>
                        <button class="btn block orange btn-round">Cari Homestay</button>
                    </div>
                </md-tab>
                <md-tab id="tab-pages" md-label="Selesai" to="/pesanan/selesai">
                    <div class="item-pesanan">
                        <div class="desc-pesanan">
                            <h4>Fresh Homestay  Murangan</h4>
                            <div class="periode">20 Juni 2018 - 22 Juni 2018</div>
                            <span class="night-duration">1 Malam</span>
                            <span class="status">Waktu pembayaran telah habis</span>
                        </div>
                        <div class="img-pesanan">
                            <img src="../../assets/images/bed-icons.png" alt="">
                        </div>
                    </div>
                </md-tab>
            </md-tabs>
        </div>
        <menu-component />
    </div>
</template>

<script>
    import { faTimes, faEye } from '@fortawesome/free-solid-svg-icons'
    import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
    import MenuComponent from '../partials/menuBottom.vue'

    export default {
        name: 'Pesanan',
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
        components: {MenuComponent}
    }
</script>

<style>

</style>
