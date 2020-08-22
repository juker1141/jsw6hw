<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 500);
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
