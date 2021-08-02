<template>
  <div class="vc-header-tablet">
    <router-link to="/">JM Shop</router-link>
    <nav class="float-right">
      <div v-if="!toggle" class="nav-toggle">
        <fontawesomeicon icon="bars" @click="$store.commit('nav-toggle')" />
      </div>
      <div v-else class="nav-toggle-not">
        <fontawesomeicon icon="times" @click="$store.commit('nav-toggle')" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderTablet",
  data() {
    return {};
  },
  computed: {
    toggle: function () {
      return this.$store.state.nav.toggle;
    },
  },
};
</script>

<style lang="less"></style>
