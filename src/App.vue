<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <the-checkout class="font-sans" />
  </div>
</template>

<script>
import TheCheckout from "@/components/TheCheckout";
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
*,
*::after,
*::before {
  @apply box-border;
  margin: 0;
  padding: 0;
}
</style>
