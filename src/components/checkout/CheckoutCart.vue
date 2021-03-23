<template>
  <div>
    <cart-items />
    <cart-total />
  </div>
</template>

<script>
import CartItems from "./cart/CartItems";
import CartTotal from "./cart/CartTotal";

export default {
  components: {
    CartItems,
    CartTotal,
  },
};
</script>

<style>
</style>