<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Header></Header>
          </div>
        </div>
      </div>
    </header>
    <div id="vue-page" class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  watch: {
    $vssWidth: function (to) {
      this.$store.commit("screen-change", to);
    },
    $route: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.$store.commit("screen-change", window.innerWidth);
  },
};
</script>

<style lang="less">
body {
  background-color: lightgrey;
}

#vue-page,
footer > .container,
header > .container {
  background-color: white;
  margin-top: 5px;
}

#vue-page {
  min-height: 85vh;
}
</style>
