<template>
  <div class="price">
    <div class="price__shipping">
      <h1>Shipping</h1>
      <p>${{ shipping }}</p>
    </div>
    <div class="price__total">
      <h1>Total</h1>
      <p>${{ showTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      shipping: 6,
      totalPrice: this.total
    };
  },
  computed: {
    showTotal() {
      return this.total > 6 ? this.total : 0;
    }
  },
  watch: {
    total(state) {
      if (state === 6) {
        this.shipping = 0;
        this.totalPrice = 0;
      } else {
        this.shipping = 6;
      }
    },
  },
};
</script>

<style>
</style>