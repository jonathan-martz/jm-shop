<template>
  <div v-if="toggle" class="vc-nav-content">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-6 col-md-3">
          <router-link :to="item.to" class="btn btn-primary d-block mb-2">{{
            item.title
          }}</router-link>
        </div>
        <div class="col-6 col-md-3">
          <router-link to="/checkout/cart/" class="btn btn-primary ml-2 btn-block">
            <fontawesomeicon icon="shopping-cart" />
          </router-link>
        </div>
        <div class="col-6 col-md-3">
          <router-link to="/user/login/" class="btn btn-primary ml-2 btn-block">
            <fontawesomeicon icon="user" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    toggle: function () {
      return this.$store.state.nav.toggle;
    },
    items: function () {
      return this.$store.state.nav.items;
    },
  },
};
</script>
