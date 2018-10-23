<template>
    <div id="detail-listing">
        <div class="back-content clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
            <!-- <span class="md-title">Yogyakarta</span> -->
            <md-button class="md-icon-button float-right" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.share" />
            </md-button>
        </div>
        <div class="contents">
            <div class="detail-listing">
                <div class="head-listing clearfix">
                    <div class="head-desc">
                        <h1>Fresh Homestay Murangan</h1>
                        <p class="address">Jl Panggeran 7Triharjo Sleman, Yogyakarta 55514</p>
                    </div>
                    <div class="see-maps">
                        <div class="get-maps"></div>
                        <a href="#">Lihat Peta</a>
                    </div>
                </div>
                <div class="slider-detail">
                    <div class="slide-first">
                        <div class="items"><img class="img-slider-items" src="../../assets/images/slider1.jpg" alt=""></div>
                        <div class="items"><img class="img-slider-items" src="../../assets/images/slider1.jpg" alt=""></div>
                    </div>
                    <div class="slide-second">
                        <div class="items"><img class="img-slider-items" src="../../assets/images/slider1.jpg" alt=""></div>
                        <div class="items"><img class="img-slider-items" src="../../assets/images/slider1.jpg" alt=""></div>
                        <div class="items"><img class="img-slider-items" src="../../assets/images/slider1.jpg" alt=""></div>
                    </div>
                </div>
                <div class="fasilitas">
                    <h3 class="sub-title">Fasilitas</h3>
                    <div class="fas-list">
                        <ul>
                            <li><img src="../../assets/images/listing/sleeping-in-bed.png"><span>Tempat Tidur Bersih</span></li>
                            <li><font-awesome-icon class="fontIcons" :icon="fontIcons.tv" /><span>Telivisi</span></li>
                            <li><img src="../../assets/images/listing/shower1.png"><span>Air Hangat</span></li>
                            <li><img src="../../assets/images/listing/ac.png"><span>AC</span></li>
                            <li><img src="../../assets/images/listing/minumam.png"><span>Air Minum<br> Full</span></li>
                            <li><font-awesome-icon class="fontIcons" :icon="fontIcons.truck" /><span>Kendaraan</span></li>
                        </ul>
                    </div>
                </div>
                <div class="testimony">
                    <div class="list-testimony">
                        <img src="../../assets/images/slider1.jpg" alt="">
                        <div class="img-overlay">
                            <h3>“Nyaman Dan Bersih”</h3>
                            <p>Prasetyo Adi</p>
                            <span>30 Agustus 2018</span>
                        </div>
                    </div>
                </div>
                <div class="static-content">
                    <div>
                        <h3 class="sub-title">Informasi Penting</h3>
                        <ul class="custom-li">
                            <li><b><i>Anda wajib menunjukkan KTP/SIM/Passport saat melakukan check-in di tempat kami</i></b></li>
                            <li>Jam check-in mulai pukul 14:00, dan check-out sebelum pukul 12:00.</li>
                            <li>Check-in sampai jam 21:00 dan bisa menghubungi Customer Service untuk check-in di atas jam 21:00.</li>
                            <li>Sewaktu check-in diperlukan tanda pengenal dengan foto dikeluarkan oleh pemerintah </li>
                            <li>Rooms adalah kamar bebas asap rokok.</li>
                        </ul>
                    </div>
                </div>
                <div class="ketersediaan-homestay with-separator">
                    <h3 class="sub-tittle">Ketersediaan Homestay</h3>
                    <div class="forms-ketersediaan">
                        <div class="form-field">
                            <span>Tanggal Check-In</span>
                            <input type="date">
                        </div>
                        <div class="form-field">
                            <span>Durasi Menginap</span>
                            <select name="" id="">
                                <option value="1 Malam">1 Malam</option>
                                <option value="2 Malam">2 Malam</option>
                                <option value="3 Malam">3 Malam</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="showing-price with-separator">
                    <div class="price-head clearfix">
                        <h4>Tamnpilkan Harga:</h4>
                        <div class="price-select">
                            <md-radio v-model="radio" :value="false">Harga Per Malam</md-radio>
                            <md-radio v-model="radio" :value="true">Harga Total</md-radio>
                        </div>
                    </div>
                    <div class="content-price clearfix">
                        <div class="price-desc">
                            <h5>Fresh Homestay Murangan</h5>
                            <ul class="custom-li">
                                <li>Tidak ada sarapan</li>
                                <li>Maks 20 Orang / Rumah</li>
                                <li>Tidak Dapat Di Batalkan</li>
                            </ul>
                        </div>
                        <div class="price-list">
                            <span>Harga Per Malam</span>
                            <div class="actual-price">Rp 500.000</div>
                            <a href="#" class="btn block primary">Pilih</a>
                        </div>
                    </div>
                </div>
                <div class="other-content">
                    <p>Belum tertarik untuk melakukan pemesanan pada homestay ini? <a href="#">Cari Homestay Terdekat Lainya</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { 
        faArrowLeft, 
        faSearch, 
        faShareAlt,
        faTv,
        faTruck
    } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Promo',
        data(){
            return{
                radio: '',
                initial: '',
                oldpassword: '',
                newpassword: '',
                repassword: '',
                fontIcons:{
                    back: faArrowLeft,
                    search: faSearch,
                    share: faShareAlt,
                    tv: faTv,
                    truck: faTruck,
                }
            }
        },
    }
</script>

<style lang="scss">
    #listing{
        .contents{
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
