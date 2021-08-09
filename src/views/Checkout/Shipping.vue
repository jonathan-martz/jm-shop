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
      <div class="col-12 col-md-6 mt-4">
        <h5>Shipping:</h5>
        <div class="input-name">
          <label>Name</label>
          <input
            type="text"
            v-model="shipping.name"
            class="form-control"
            placeholder="Full Name"
          />
        </div>
        <div class="input-street">
          <label>Street</label>
          <input
            type="text"
            v-model="shipping.street"
            class="form-control"
            placeholder="Street"
          />
        </div>
        <div class="input-number">
          <label>Number</label>
          <input
            type="text"
            v-model="shipping.number"
            class="form-control"
            placeholder="Street Number"
          />
        </div>
        <div class="input-zip">
          <label>Zip</label>
          <input
            type="text"
            v-model="shipping.zip"
            class="form-control"
            placeholder="Zip"
          />
        </div>
        <div class="input-city">
          <label>City</label>
          <input
            type="text"
            v-model="shipping.city"
            class="form-control"
            placeholder="City"
          />
        </div>
        <div class="input-country">
          <label>Country</label>
          <input
            type="text"
            v-model="shipping.country"
            class="form-control"
            placeholder="Country"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 mt-4">
        <div class="form-group">
          <input type="checkbox" v-model="same" />
          <h6>Billing and Shipping are the same.</h6>
        </div>
        <h5>Billing:</h5>
        <div class="input-name">
          <label>Name</label>
          <input
            :disabled="same"
            type="text"
            v-model="billing.name"
            class="form-control"
            placeholder="Full Name"
          />
        </div>
        <div class="input-street">
          <label>Street</label>
          <input
            type="text"
            :disabled="same"
            v-model="billing.street"
            class="form-control"
            placeholder="Street"
          />
        </div>
        <div class="input-number">
          <label>Number</label>
          <input
            type="text"
            :disabled="same"
            v-model="billing.number"
            class="form-control"
            placeholder="Street Number"
          />
        </div>
        <div class="input-zip">
          <label>Zip</label>
          <input
            type="text"
            v-model="billing.zip"
            :disabled="same"
            class="form-control"
            placeholder="Zip"
          />
        </div>
        <div class="input-city">
          <label>City</label>
          <input
            type="text"
            v-model="billing.city"
            :disabled="same"
            class="form-control"
            placeholder="City"
          />
        </div>
        <div class="input-country">
          <label>Country</label>
          <input
            type="text"
            v-model="billing.country"
            class="form-control"
            :disabled="same"
            placeholder="Country"
          />
        </div>
      </div>
      <div class="col-12">
        <router-link to="/checkout/payment" class="btn btn-primary float-right mt-2"
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
      shipping: {
        name: "",
        street: "",
        number: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        name: "",
        street: "",
        number: "",
        zip: "",
        city: "",
        country: "",
      },
      same: false,
    };
  },
  mounted() {
    this.same = true;
  },
  watch: {
    same: function (to) {
      if (to) {
        this.billing = this.shipping;
      } else {
        this.billing = {
          name: "",
          street: "",
          number: "",
          zip: "",
          city: "",
          country: "",
        };
      }
    },
  },
};
</script>
