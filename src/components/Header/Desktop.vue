<template>
  <div class="vc-header-desktop">
    <router-link to="/">JM Shop</router-link>

    <div class="cart float-right">
      <router-link to="/checkout/cart" class="btn btn-primary ml-2">
        <fontawesomeicon icon="shopping-cart" />
      </router-link>
    </div>
    <nav class="float-right">
      <router-link to="/impressum" class="ml-2 btn btn-primary">Impressum</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderDesktop",
};
</script>
