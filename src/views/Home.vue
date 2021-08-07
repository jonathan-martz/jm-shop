<template>
  <div class="vp-homepage">
    <div class="container mt-2 mb-3">
      <div class="row">
        <div class="col-12">
          <h5>Products</h5>
        </div>
        <div
          v-for="(item, index) in productItems"
          class="col-12 col-md-4 col-lg-3"
          :key="index"
        >
          <product-card :identifier="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Product/Card.vue";

export default {
  name: "Homepage",
  data() {
    return {
      productItems: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      fetch("https://ms.movie.jetzt/products/newest/", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.products) {
            this.productItems = data.products;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  components: {
    "product-card": ProductCard,
  },
};
</script>

<style lang="less">
.card {
  border: 1px solid black;
}
</style>
