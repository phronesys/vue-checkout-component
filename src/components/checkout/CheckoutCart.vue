<template>
  <div>
    <cart-list />
    <cart-total />
  </div>
</template>

<script>
import CartList from "./cart/CartList";
import CartTotal from "./cart/CartTotal";

export default {
  components: {
    CartList,
    CartTotal,
  },
};
</script>

<style>
</style>