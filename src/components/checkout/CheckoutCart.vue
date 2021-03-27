<template>
  <div class="cart-list">
    <cart-list @set-total-price="updateTotal"/>
    <cart-total :total="totalPrice"/>
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
  data() {
    return {
      totalPrice: 0,
    }
  },
  methods: {
    updateTotal(total) {
      this.totalPrice = total;
    }
  }
};
</script>

<style lang="postcss">
.cart-list {
  @apply bg-gray-100 rounded-xl p-1 m-4;
}
</style>