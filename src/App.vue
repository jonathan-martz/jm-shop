<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12 pb-2 pt-2">
            <Header></Header>
          </div>
          <div class="col-12">
            <Nav-Content></Nav-Content>
          </div>
          <div class="col-12">
            <Messages></Messages>
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
import NavContent from "@/components/NavContent.vue";
import Messages from "@/components/Messages.vue";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    NavContent,
    Messages,
  },
  watch: {
    $vssWidth: function (to) {
      this.$store.commit("screen-change", to);
      this.$store.commit("nav-close");
    },
    $route: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.$store.commit("nav-close");
    },
  },
  mounted() {
    this.$store.commit("screen-change", window.innerWidth);
    this.$store.commit("user-reload", {
      that: this,
    });
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

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
