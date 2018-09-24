<template>
    <div id="homepage">
        <slider-component />
        <div class="content-menu">
            <div class="separator">Homestay</div>
            <div class="forms-search">
                <div class="form-list">
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
                        <div class="value" id="checkin">5 September 2018</div>
                    </div>
                </div>
                <div class="form-list">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.durations" />
                    <div class="media">
                        <span>Durasi Menginap</span>
                        <div class="value" id="durations">1 Malam</div>
                    </div>
                </div>
                <div class="form-list">
                    <button class="btn block primary">Cari HomeStay</button>
                </div>
            </div>
        </div>
        <menu-component />
    </div>
</template>

<script>
    import { faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
    import MenuComponent from '../partials/menuBottom.vue'
    import SliderComponent from './Slider.vue'
    export default {
        name: 'HomePage',
        data(){
            return{
                fontIcons:{
                    checkIn: faCalendarCheck,
                    durations: faCalendarTimes,
                }
            }
        },
        components: {MenuComponent, SliderComponent}
    }
</script>

<style>

</style>
