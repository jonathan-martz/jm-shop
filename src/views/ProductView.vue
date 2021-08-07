<template>
  <div class="vp-product-view">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mt-2">
          Image Slider Reviews
          <img src="https://via.placeholder.com/400x480" class="img-responsive" />
          <rating class="mt-2"></rating>
        </div>
        <div class="col-12 col-md-4">
          <h5>Newest Reviews:</h5>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-2">
          <h1 class="h5">{{ item.name }}</h1>
          <h6>SKU: {{ item.sku }}</h6>
          <p class="short-desc">
            {{ item.desc }}
          </p>
          <span class="price">9,99€</span>
          <p class="stock">
            Stock:
            <span v-if="stock.qty > 0">Available</span>
            <span v-else>not Available</span>
          </p>
          <div v-if="stock.qty > 0" class="qty">
            <input type="number" placeholder="Menge" value="1" :max="stock.qty" />
          </div>
          <div class="btn-group mt-2">
            <a href="" v-if="stock.qty > 0" class="add-to-cart btn btn-primary"
              >Add to Cart</a
            >
            <a href="" class="add-to-wishlist btn btn-secondary">Add to Wishlist</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "ProductView",
  data() {
    return {
      item: {},
      stock: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      if (this.$route.params.sku) {
        fetch("https://ms.movie.jetzt/product/sku/" + this.$route.params.sku, {
          method: "GET",
        })
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
      } else {
        this.$router.push("/");
      }
    },
    loadStock: function (id) {
      fetch("https://ms.movie.jetzt/stock/" + id, {
        method: "GET",
      })
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
  components: {
    rating: Rating,
  },
};
</script>
