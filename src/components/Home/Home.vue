<template>
    <div id="homepage">
        <slider-component />
        <div class="content-menu">
            <div class="separator">Homestay</div>
            <div class="forms-search">
                <div class="form-list" @click.prevent="SearchPlace()">
                    <img src="../../assets/images/searchFilter.png">
                    <div class="media">
                        <span>HomeStay di Sekitar</span>
                        <div class="value" id="locations">Yogyakarta</div>
                    </div>
                </div>
                <div class="form-list">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.checkIn" />
                    <div class="media">
                        <span>Check-In</span>
                        <div class="dateTest">
                            <md-datepicker v-model="selectedDate" :md-open-on-focus="false" />
                        </div>
                        <div class="value" id="checkin" @click="openDate()">{{selectedDate | moment("DD MMMM YYYY")}}</div>
                    </div>
                </div>
                <div class="form-list">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.durations" />
                    <div class="media">
                        <span>Durasi Menginap</span>
                        <select class="value" id="durations" v-model="pernight">
                            <option value="1 Malam">1 Malam</option>
                            <option value="2 Malam">2 Malam</option>
                            <option value="3 Malam">3 Malam</option>
                            <option value="4 Malam">4 Malam</option>
                            <option value="5 Malam">5 Malam</option>
                            <option value="6 Malam">6 Malam</option>
                            <option value="7 Malam">7 Malam</option>
                            <option value="8 Malam">8 Malam</option>
                            <option value="9 Malam">9 Malam</option>
                            <option value="10 Malam">10 Malam</option>
                        </select>
                    </div>
                </div>
                <div class="form-list">
                    <button class="btn block primary">Cari HomeStay</button>
                </div>
            </div>
        </div>

        <div class="searchFilter" id="searchFilter">
            <div class="searchHead">
                <span>Menginap dimana? </span>
                <a href="#" class="close" @click.prevent="closePlace()"><font-awesome-icon class="fontIcons" :icon="fontIcons.close" /></a>
                <input type="text" class="searchPlace" v-model="searchLocations">
            </div>
            <div class="searchContent">
                <span class="searchText">Destinasi Populer</span>
                <div class="searchListing" v-if="itemsData">
                    <div class="searchItem" v-for="(dataLocations, IndexLocations) in itemsData" :key="IndexLocations">
                        <font-awesome-icon class="fontIcons" :icon="fontIcons.marker" />
                        <div class="desc">
                            <div class="name">{{dataLocations.name}}</div>
                            <div class="type">{{dataLocations.type}}</div>
                        </div>
                    </div>
                    <!-- <div class="searchItem">
                        <font-awesome-icon class="fontIcons" :icon="fontIcons.marker" />
                        <div class="desc">
                            <div class="name">Jakarta</div>
                            <div class="type">Region</div>
                        </div>
                    </div>
                    <div class="searchItem">
                        <font-awesome-icon class="fontIcons" :icon="fontIcons.marker" />
                        <div class="desc">
                            <div class="name">Jakarta</div>
                            <div class="type">Region</div>
                        </div>
                    </div>
                    <div class="searchItem">
                        <font-awesome-icon class="fontIcons" :icon="fontIcons.marker" />
                        <div class="desc">
                            <div class="name">Jakarta</div>
                            <div class="type">Region</div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <menu-component />
    </div>
</template>

<script>
    import { faCalendarCheck, faCalendarTimes, faTimes, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
    import MenuComponent from '../partials/menuBottom.vue'
    import SliderComponent from './Slider.vue'

    var date = new Date();

    export default {
        name: 'HomePage',
        data(){
            return{
                apiUrl: process.env.ROOT_API,
                sectionApi: 'location',

                itemsData: [],
                errored: false,
                loading: false,

                searchLocations: '',
                selectedDate: date,
                pernight: '1 Malam',

                fontIcons:{
                    checkIn: faCalendarCheck,
                    durations: faCalendarTimes,
                    close: faTimes,
                    marker: faMapMarkerAlt,
                }
            }
        },
        watch: {
            searchLocations: function(newValue){
                this.getLocations(newValue)
            }
        },
        methods: {
            buildUrl(keyword){
                return this.apiUrl + this.sectionApi + "?keyword=" + keyword
            },
            getLocations(keyword){
                let url = this.buildUrl(keyword)
                this.axios.get(url)
                .then(response => {
                    this.itemsData = response.data.data
                    // console.log(response)
                })
                .catch(error => { 
                    console.log(error);
                    this.errored = true
                })
            },
            SearchPlace(){
                document.querySelector('#searchFilter').classList.add('showing');
            },
            closePlace(){
                document.querySelector('#searchFilter').classList.remove('showing');
            },
            openDate(){
                document.querySelector('.forms-search .md-date-icon').click();
            }
        },
        components: {MenuComponent, SliderComponent}
    }
</script>

<style lang="scss">
    .dateTest{
        .md-datepicker{
            display: none;
        }
    }
</style>
