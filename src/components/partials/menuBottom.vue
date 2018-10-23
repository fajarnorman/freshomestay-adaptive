<template>
    <div id="bottom-menu">
        <!-- <ul class="bottom-menu-fix">
            <li>
                <a href="#">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.search" />
                    Cari
                </a>
            </li>
            <li>
                <a href="#">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.pesanan" />
                    Pesanan
                </a>
            </li>
            <li>
                <a href="#">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.menu" />
                    Menu
                </a>
            </li>
        </ul> -->
        <div class="bottom-menu">
            <md-bottom-bar md-sync-route>
                <md-bottom-bar-item to="/">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.search" />
                    <span>Cari</span>
                </md-bottom-bar-item>
                <md-bottom-bar-item to="/pesanan/aktif">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.pesanan" />
                    <span>Pesanan</span>
                </md-bottom-bar-item>
                <md-bottom-bar-item to="/menu">
                    <font-awesome-icon class="fontIcons" :icon="fontIcons.menu" />
                    <span>Menu</span>
                </md-bottom-bar-item>
            </md-bottom-bar>
        </div>
    </div>
</template>

<script>
    import { faSearch, faAlignRight } from '@fortawesome/free-solid-svg-icons'
    import { faListAlt } from '@fortawesome/free-regular-svg-icons'

    export default {
        name: 'menuBottom',
        data(){
            return{
                fontIcons:{
                    search: faSearch,
                    pesanan: faListAlt,
                    menu: faAlignRight,
                }
            }
        },
    }
</script>

<style>

</style>
