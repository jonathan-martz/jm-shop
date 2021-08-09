<template>
  <div class="vp-user-debug">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <table class="tb-green">
            <tr>
              <th>Username</th>
              <td>{{ auth.username }}</td>
            </tr>
            <tr>
              <th>Token</th>
              <td>{{ auth.token }}</td>
            </tr>
          </table>
        </div>
        <div class="col-12 col-md-6">{{ user }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDebug",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    auth: function () {
      return this.$store.state.user;
    },
  },
  methods: {
    load: function () {
      this.$store.commit("user-reload", {
        that: this,
      });
      fetch("https://ms.movie.jetzt/user/auth/", {
        method: "POST",
        body: JSON.stringify(this.$store.state.user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            this.user = data.user;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
