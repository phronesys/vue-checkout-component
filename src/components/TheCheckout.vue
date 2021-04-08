<template>
  <div class="checkout">
    <h1 class="checkout__title">
      Checkout
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

<style lang="postcss">
.checkout {
  width: max-content;
}
.checkout__title{ 
  @apply -mt-8;
  @apply font-semibold text-xl;
  @apply text-left ml-5;
}
</style>