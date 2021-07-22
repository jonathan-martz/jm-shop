<template>
    <div class="vc-header">
    <HeaderMobile v-if="$store.state.screen.mobile"></HeaderMobile>
    <HeaderTablet v-if="$store.state.screen.tablet"></HeaderTablet>
    <HeaderDesktop v-if="$store.state.screen.desktop"></HeaderDesktop>
    </div>
</template>

<script>
import HeaderMobile from '@/components/Header/Mobile.vue'
import HeaderTablet from '@/components/Header/Tablet.vue'
import HeaderDesktop from '@/components/Header/Desktop.vue'

export default {
    name: 'App',
    components: {
        HeaderMobile,
        HeaderTablet,
        HeaderDesktop,
    }
}
</script>

<style lang="less">

</style>
