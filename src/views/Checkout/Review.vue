<template>
  <div class="vc-review">
    <div class="col-12 mb-2">
      <div class="btn-group btn-block">
        <router-link to="/checkout/cart" class="btn btn-secondary">Cart</router-link>
        <router-link to="/checkout/shipping" class="btn btn-secondary"
          >Shipping</router-link
        >
        <router-link to="/checkout/payment" class="btn btn-secondary"
          >Payment</router-link
        >
        <router-link to="/checkout/review" class="btn btn-primary">Review</router-link>
      </div>
    </div>
    <div class="col-12 col-md-4"></div>
    <div class="col-12 col-md-4">
      <a href="#" class="btn btn-primary float-right">Buy</a>
    </div>
    <div class="col-12 col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: "CheckoutReview",
  data() {
    return {};
  },
};
</script>
