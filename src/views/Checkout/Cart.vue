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
        <div class="vc-cart">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Product Name</h5>
                <small>Sku: test-123</small>
              </div>
              <p class="mb-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
              <small>Price: 9,99€ / Qty: 1</small>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Product Name</h5>
                <small>Sku: test-123</small>
              </div>
              <p class="mb-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
              <small>Price: 9,99€ / Qty: 1</small>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Product Name</h5>
                <small>Sku: test-123</small>
              </div>
              <p class="mb-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
              <small>Price: 9,99€ / Qty: 1</small>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12">
        <router-link to="/checkout/shipping" class="btn btn-primary float-right"
          >Next Step</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutCart",
  data() {
    return {};
  },
  computed: {
    items: function () {
      return this.$store.state.cart.items;
    },
  },
};
</script>
