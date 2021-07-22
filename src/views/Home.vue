<template>
  <div class="vp-homepage">
    <div class="container mt-2 mb-3">
      <div class="row">
        <div
          v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          class="col-12 col-md-4 col-lg-3"
          :key="index"
        >
          <product-card identifier="1" />
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
    return {};
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
