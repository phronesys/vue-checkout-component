<template>
  <div>
    <h1 class="checkout__title">
      The Checkout
    </h1>
    <div>
      <checkout-cart />
    </div>
    <div>
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