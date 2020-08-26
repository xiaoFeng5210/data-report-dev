<template>
    <div class="home">
        <TopView></TopView>
        <SalesView></SalesView>
        <BottomView></BottomView>
        <MapView></MapView>
    </div>
</template>

<script>
    import BottomView from './BottomView/index'
    import SalesView from './SalesView/index'
    import MapView from './MapView/index'
    import TopView from "./TopView/index";

    export default {
        name: 'HomePage',
        components: {
            TopView,
            BottomView,
            SalesView,
            MapView
        }
    }
</script>


<style scoped>

</style>
