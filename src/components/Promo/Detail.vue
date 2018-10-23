<template>
    <div id="promo">
        <div class="back-content transparent clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>

            <md-button class="md-icon-button float-right">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.share" />
            </md-button>
            <!-- <span class="md-title">Promo</span> -->
        </div>
        <div class="img-slide">
            <img src="../../assets/images/promo1.jpg" alt="">
        </div>
        <div class="contents no-padding-top content-menu">
            <h5 class="title-promo">Homestay, kapan saja anda</h5>
            <div class="content-promo">
                <div class="desc-promo">
                    <div class="title">Deskripsi Promo</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est eveniet numquam quo? Enim, impedit, provident quisquam veritatis quasi quis tempore nemo quae atque similique obcaecati aperiam placeat, saepe optio!</p>
                </div>
                <div class="kupon">
                    <div class="title">Kode Promo</div>
                </div>
                <div class="syarat-ketentuan">
                    <div class="title bold">Syarat & Ketentuan</div>
                    <ol>
                        <li>Periode</li>
                        <li>Periode</li>
                        <li>Periode</li>
                        <li>Periode</li>
                        <li>Periode</li>
                        <li>Periode</li>
                    </ol>
                </div>
                <a href="#" class="btn block orange button-bottom">Pesan Sekarang</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons'
    import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

    export default {
        name: 'Promo',
        data(){
            return{
                apiUrl: process.env.ROOT_API,
                sectionApi: 'promotion',

                itemsData: [],
                errored: false,
                loading: false,

                oldpassword: '',
                newpassword: '',
                repassword: '',
                fontIcons:{
                    back: faArrowLeft,
                    share: faShareAlt,
                }
            }
        },
        mounted () {
            this.getPromotionsData()
        },
        methods: {
            buildUrl(){
                return this.apiUrl + this.sectionApi
            },

            getPromotionsData(){
                let url = this.buildUrl()
                this.loading = true
                this.axios.get(url)
                .then(response => {
                    this.itemsData = response.data.data
                })
                .catch(error => { 
                    console.log(error);
                    this.errored = true
                })
                .finally(() => this.loading = false)
            }
        },
    }
</script>

<style>

</style>
