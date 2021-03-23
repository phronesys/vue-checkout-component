<template>
  <div>
    <the-checkout />
  </div>
</template>

<script>
import TheCheckout from '@/components/TheCheckout';
export default {
  name: "App",
  components: {
    TheCheckout,
  },
};
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
