<template>
  <div v-if="item" class="vc-product-card">
    <div class="card mt-2">
      <img
        class="card-img-top"
        src="https://via.placeholder.com/468x300"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">
          {{ item.desc }}
        </p>
        <router-link :to="'/product/' + item.sku" class="btn btn-primary"
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
    };
  },
  methods: {
    load: function () {
      fetch("https://ms.movie.jetzt/product/id/" + this.identifier)
        .then((response) => response.json())
        .then((data) => {
          if (data.product) {
            this.item = data.product;
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
