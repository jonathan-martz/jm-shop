<template>
    <div class="vc-header">
    <FooterMobile v-if="$store.state.screen.mobile"></FooterMobile>
    <FooterTablet v-if="$store.state.screen.tablet"></FooterTablet>
    <FooterDesktop v-if="$store.state.screen.desktop"></FooterDesktop>
    </div>
</template>

<script>
import FooterMobile from '@/components/Footer/Mobile.vue'
import FooterTablet from '@/components/Footer/Tablet.vue'
import FooterDesktop from '@/components/Footer/Desktop.vue'

export default {
    name: 'Footer',
    components: {
        FooterMobile,
        FooterTablet,
        FooterDesktop,
    }
}
</script>

<style lang="less">

</style>
