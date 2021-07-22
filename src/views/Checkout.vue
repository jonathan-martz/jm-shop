<template>
  <div class="vp-checkout">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2">
          <div class="btn-group btn-block">
            <button @click="step = 'cart'" class="btn btn-primary">Cart</button>
            <button @click="step = 'shipping'" class="btn btn-secondary">Shipping</button>
            <button @click="step = 'payment'" class="btn btn-secondary">Payment</button>
            <button @click="step = 'review'" class="btn btn-secondary">Review</button>
          </div>
        </div>
        <div class="col-12 col-md-4"></div>
        <div v-if="step == 'cart'" class="col-12 col-md-4">
          <checkout-cart></checkout-cart>
        </div>
        <div v-else-if="step == 'shipping'" class="col-12 col-md-4">
          <checkout-shipping></checkout-shipping>
        </div>
        <div v-else-if="step == 'payment'" class="col-12 col-md-4">
          <checkout-payment></checkout-payment>
        </div>
        <div v-else-if="step == 'review'" class="col-12 mt-2">
          <checkout-review></checkout-review>
        </div>
        <div v-else class="col-12 mt-2">
          <p>Upps something went wrong.</p>
        </div>
        <div class="col-12 col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutCart from "@/components/Checkout/Cart.vue";
import CheckoutPayment from "@/components/Checkout/Payment.vue";
import CheckoutShipping from "@/components/Checkout/Shipping.vue";
import CheckoutReview from "@/components/Checkout/Review.vue";

export default {
  name: "Checkout",
  components: {
    "checkout-cart": CheckoutCart,
    "checkout-payment": CheckoutPayment,
    "checkout-shipping": CheckoutShipping,
    "checkout-review": CheckoutReview,
  },
  data() {
    return {
      step: "cart",
    };
  },
};
</script>

<style lang="less">
.btn-outline {
  background-color: white;
}

.list-group {
  border: 1px solid grey;
}
</style>
