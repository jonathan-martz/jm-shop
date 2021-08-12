<template>
  <div v-if="item" class="vc-product-card">
    <div class="card mt-2">
      <img
        class="card-img-top"
        src="https://via.placeholder.com/468x300"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">
          {{ item.name }}
          <div class="price float-right">{{ formatedPrice }}</div>
        </h5>
        <p class="card-text">
          {{ item.desc }}
        </p>
        <router-link
          :to="'/product/' + item.sku"
          v-if="this.button"
          class="btn btn-primary"
          >Go somewhere</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      item: {},
      stock: {},
    };
  },
  computed: {
    formatedPrice: function () {
      let value = this.stock.price;
      if (typeof value !== "number") {
        return value;
      }
      var formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      });
      return formatter.format(value);
    },
  },
  methods: {
    load: function () {
      fetch("https://ms.movie.jetzt/product/id/" + this.identifier)
        .then((response) => response.json())
        .then((data) => {
          if (data.product) {
            this.item = data.product;
            this.loadStock(data.product.stock_id);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    loadStock: function (id) {
      fetch("https://ms.movie.jetzt/stock/" + id)
        .then((response) => response.json())
        .then((data) => {
          if (data.stock) {
            this.stock = data.stock;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  mounted() {
    this.load();
  },
  props: {
    identifier: {
      required: true,
      type: Number,
    },
    button: {
      required: false,
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less">
.card {
  .card-img-top {
    border-bottom: 1px solid black;
  }
}
</style>
