<template>
  <div class="checkout">
    <h1 class="checkout__title">
      The Checkout
    </h1>
    <div class="checkout__cart">
      <checkout-cart />
    </div>
    <div class="checkout__form">
      <checkout-form />
    </div>
  </div>
</template>

<script>
import CheckoutForm from "./checkout/CheckoutForm";
import CheckoutCart from "./checkout/CheckoutCart";

export default {
  components: {
    CheckoutForm,
    CheckoutCart,
  },
};
</script>

<style>
</style>