<template>
  <div class="vc-cart">
    <div class="col-12 mb-2">
      <div class="btn-group btn-block">
        <router-link to="/checkout/cart" class="btn btn-primary">Cart</router-link>
        <router-link to="/checkout/shipping" class="btn btn-secondary"
          >Shipping</router-link
        >
        <router-link to="/checkout/payment" class="btn btn-secondary"
          >Payment</router-link
        >
        <router-link to="/checkout/review" class="btn btn-secondary">Review</router-link>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-4 mt-2">
        <div class="vc-cart" v-for="(item, index) in cart" :key="index">
          <product-card :identifier="item.product" :button="false"> </product-card>
          <div class="d-block px-2 py-2">
            <label>Menge:</label>
            <input
              type="number"
              v-model="item.qty"
              min="1"
              @change="update(item.id, item.qty)"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12">
        <router-link to="/checkout/shipping" class="btn btn-primary float-right mt-2"
          >Next Step</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Product/Card.vue";

export default {
  name: "CheckoutCart",
  data() {
    return {};
  },
  components: {
    "product-card": ProductCard,
  },
  mounted() {
    this.$store.commit("cart-load", {
      that: this,
    });
  },
  computed: {
    cart: function () {
      return this.$store.state.cart.items;
    },
  },
  methods: {
    update: function (id, qty) {
      this.$store.commit("cart-update-qty", {
        that: this,
        id: id,
        qty: qty,
      });
    },
  },
};
</script>
