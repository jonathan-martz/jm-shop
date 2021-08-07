<template>
  <div class="vp-user-login">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5>Login</h5>
          <p>Login Blabla</p>
          <form class="login">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" v-model="login.username" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="login.password" />
            </div>
            <div class="btn-group">
              <button @click="auth()" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6">
          <h5>Register</h5>
          <p>Register Blabla</p>
          <form class="register">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" v-model="register.username" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="register.password" />
            </div>
            <div class="btn-group">
              <button @click="create()" class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      register: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    check: function () {
      if (this.$store.state.user.token !== "" && this.$store.state.user.username !== "") {
        this.$router.push("/");
      }
    },
    auth: function () {
      fetch("https://ms.movie.jetzt/user/login/", {
        method: "POST",
        body: JSON.stringify(this.login),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            this.$store.commit("user-login", {
              that: this,
              user: {
                username: this.login.username,
                token: data.token,
              },
            });
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    create: function () {
      fetch("https://ms.movie.jetzt/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.register),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data.token);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
