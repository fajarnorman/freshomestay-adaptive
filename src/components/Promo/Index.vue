<template>
    <div id="promo">
        <div class="back-content clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
            <span class="md-title">Promo</span>
        </div>
        <div class="contents">
            <div 
                class="items-promo" 
                v-for="(dataPromo, indexPromo) in itemsData" 
                :key="indexPromo">
                <a href="#">
                    <img :src="dataPromo.image_link" :alt="dataPromo.name">
                    <span>Periode Booking: <b>hingga {{dataPromo.end_date | moment("DD MMMM YYYY")}}</b></span>
                </a>
            </div>
            <!-- <div class="items-promo">
                <a href="#">
                    <img src="../../assets/images/promo1.jpg" alt="">
                    <span>Periode Booking: <b>hingga 21 Juni 2018</b></span>
                </a>
            </div>
            <div class="items-promo">
                <a href="#">
                    <img src="../../assets/images/promo1.jpg" alt="">
                    <span>Periode Booking: <b>hingga 21 Juni 2018</b></span>
                </a>
            </div>
            <div class="items-promo">
                <a href="#">
                    <img src="../../assets/images/promo1.jpg" alt="">
                    <span>Periode Booking: <b>hingga 21 Juni 2018</b></span>
                </a>
            </div>
            <div class="items-promo">
                <a href="#">
                    <img src="../../assets/images/promo1.jpg" alt="">
                    <span>Periode Booking: <b>hingga 21 Juni 2018</b></span>
                </a>
            </div>
            <div class="items-promo">
                <a href="#">
                    <img src="../../assets/images/promo1.jpg" alt="">
                    <span>Periode Booking: <b>hingga 21 Juni 2018</b></span>
                </a>
            </div> -->
        </div>
    </div>
</template>

<script>
    import { faTimes, faEye } from '@fortawesome/free-solid-svg-icons'
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
                    back: faTimes,
                    showpassword: faEye,
                    facebook: faFacebookSquare,
                    google: faGoogle,
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
