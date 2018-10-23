<template>
    <div id="listing">
        <div class="back-content clearfix">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.back" />
            </md-button>
            <span class="md-title">Yogyakarta</span>
            <md-button class="md-icon-button float-right" @click="$router.go(-1)">
                <font-awesome-icon class="fontIcons" :icon="fontIcons.search" />
            </md-button>
        </div>
        <div class="contents">
            <ul class="tabs-menu-listing">
                <li><a href="#" class="active">Semua</a></li>
                <li><a href="#">Standart</a></li>
                <li><a href="#">Premier</a></li>
                <li><a href="#">Eco</a></li>
            </ul>
            <div class="listing-note">
                <img src="../../assets/images/listing-note.png" alt=""><p>Fresh homestay menyediakan standart kenyamanan yang sama di setiap kota nya</p>
            </div>
            <div class="listing-content">
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
                <div class="listing-item clearfix">
                    <div class="desc">
                        <img src="../../assets/images/promo1.jpg" alt="">
                        <div class="desc-note">
                            <h4>Fresh Homestay Ambar ketawang 1</h4>
                            <div class="type">THE RESIDENCE B5</div>
                        </div>
                    </div>
                    <div class="prices">
                        <span>Harga Per Malam</span>
                        <div class="price-diskon">Rp 850.000</div>
                        <div class="price">Rp 750.000</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter-menu">
            <a href="#" @click.prevent="FilterShow()"><font-awesome-icon class="fontIcons" :icon="fontIcons.filter" /> Filter & Short</a>
            <a href="#"><font-awesome-icon class="fontIcons" :icon="fontIcons.maps" /> Map View</a>
        </div>

        <div class="filter-content" id="filter-content">
            <div class="filter-head">Filter & Sort <a href="#" @click.prevent="closeFilter()" class="close"><font-awesome-icon class="fontIcons" :icon="fontIcons.close" /></a></div>
            <div class="filter-listing">
                <div class="item-filter">
                    <h4 class="sub-title">Fasilitas</h4>
                    <md-checkbox v-model="fasilitas" value="1">AC</md-checkbox>
                    <md-checkbox v-model="fasilitas" value="2">Dapur</md-checkbox>
                    <md-checkbox v-model="fasilitas" value="3">Kulkas</md-checkbox>
                </div>
                <div class="item-filter">
                    <h4 class="sub-title">Kisaran Harga Per Malam</h4>
                    <md-checkbox v-model="price" value="1">Di Bawah Rp 500.000</md-checkbox>
                    <md-checkbox v-model="price" value="2">Rp 500.000 - Rp 1.000.000</md-checkbox>
                    <md-checkbox v-model="price" value="3">Di Atas Rp 1.000.000</md-checkbox>
                </div>
            </div>
            <a href="#" @click.prevent="closeFilter()" class="sumbit-button btn primary block button-bottom">Filter</a>
        </div>
    </div>
</template>

<script>
    import { faArrowLeft, faSearch, faFilter, faMap, faTimes } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Promo',
        data(){
            return{
                filterShowing: false,
                initial: '',
                fasilitas: [],
                price: [],
                fontIcons:{
                    back: faArrowLeft,
                    search: faSearch,
                    filter: faFilter,
                    maps: faMap,
                    close: faTimes,
                }
            }
        },
        methods: {
            FilterShow(){
                document.querySelector('#filter-content').classList.add('showing')
            },
            closeFilter(){
                document.querySelector('#filter-content').classList.remove('showing')
            }
        }
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
