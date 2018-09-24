<template>
    <div id="slider">
        <tiny-slider :mouse-drag="true" :loop="false" items="1" gutter="0" :nav="true">
            <div><img src="../../assets/images/promo1.jpg" alt=""></div>
            <div><img src="../../assets/images/promo2.jpg" alt=""></div>
            <div><img src="../../assets/images/promo3.jpg" alt=""></div>
        </tiny-slider>
        <a href="#" class="seeallpromo">Lihat Semua Promo</a>
    </div>
</template>

<script>
    import VueTinySlider from 'vue-tiny-slider'

    export default {
        name: 'slider',
        components: { 'tiny-slider': VueTinySlider }
    }
</script>

<style>

</style>
