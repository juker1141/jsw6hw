<template>
  <div>
    <router-link to="/home">BackToHome</router-link>|
    <router-link to="/admin">admin</router-link>|
    <router-link to="/admin/products">Products</router-link>|
    <router-link to="/admin/coupons">Coupons</router-link>
    <h2>這是管理頁面</h2>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      /* eslint-disable */
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)testToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const url = `${process.env.VUE_APP_APIPATH}auth/check`;
      this.$http
        .post(url, {
          api_token: this.token,
        })
        .then((res) => {
          console.log(res);
          this.checkSuccess = true;
        })
        .catch((error) => {
          console.log(error.response);
          this.$router.push('/login');
        });
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
