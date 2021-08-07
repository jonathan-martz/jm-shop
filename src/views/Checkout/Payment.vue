<template>
  <div class="vc-payment">
    <div class="col-12 mb-2">
      <div class="btn-group btn-block">
        <router-link to="/checkout/cart" class="btn btn-secondary">Cart</router-link>
        <router-link to="/checkout/shipping" class="btn btn-secondary"
          >Shipping</router-link
        >
        <router-link to="/checkout/payment" class="btn btn-primary">Payment</router-link>
        <router-link to="/checkout/review" class="btn btn-secondary">Review</router-link>
      </div>
    </div>
    <div class="col-12">
      <select class="form-control">
        <option>Vorkasse</option>
      </select>
      <div class="form-group">
        <label>IBAN</label>
        <input type="text" v-model="payment.iban" placeholder="IBAN" />
      </div>
    </div>
    <div class="col-12">
      <router-link to="/checkout/review" class="btn btn-primary float-right"
        >Next Step</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPayment",
  data() {
    return {};
  },
};
</script>
