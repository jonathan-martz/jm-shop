<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-2">
        <div class="btn-group btn-block">
          <router-link to="/checkout/cart" class="btn btn-secondary">Cart</router-link>
          <router-link to="/checkout/shipping" class="btn btn-primary"
            >Shipping</router-link
          >
          <router-link to="/checkout/payment" class="btn btn-secondary"
            >Payment</router-link
          >
          <router-link to="/checkout/review" class="btn btn-secondary"
            >Review</router-link
          >
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-4 mt-4">
        <div class="input-name">
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Full Name"
          />
        </div>
        <div class="input-street">
          <label>Street</label>
          <input type="text" v-model="street" class="form-control" placeholder="Street" />
        </div>
        <div class="input-number">
          <label>Number</label>
          <input
            type="text"
            v-model="number"
            class="form-control"
            placeholder="Street Number"
          />
        </div>
        <div class="input-zip">
          <label>Zip</label>
          <input type="text" v-model="zip" class="form-control" placeholder="Zip" />
        </div>
        <div class="input-city">
          <label>City</label>
          <input type="text" v-model="city" class="form-control" placeholder="City" />
        </div>
        <div class="input-country">
          <label>Country</label>
          <input
            type="text"
            v-model="country"
            class="form-control"
            placeholder="Country"
          />
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12">
        <router-link to="/checkout/payment" class="btn btn-primary float-right"
          >Next Step</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckoutShipping",
  data() {
    return {
      name: "",
      street: "",
      number: "",
      zip: "",
      city: "",
      country: "",
    };
  },
};
</script>
