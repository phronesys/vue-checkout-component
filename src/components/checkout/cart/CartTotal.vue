<template>
  <div class="price">
    <div class="price__shipping">
      <h1>Shipping</h1>
      <p>${{ showShipping }}</p>
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
      default: 140,
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
    },
    showShipping() {
      return this.total > 6 ? 6 : 0;
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

<style lang="postcss">
.price {
  @apply flex flex-col justify-center mx-auto;
  @apply w-10/12 mt-16;
  @apply font-semibold;
}
.price__shipping::before {
  content: "";
  height: .1px;
  display: block;
  background-color: black;
  width: 100%;
  height: .1px;
  transform: translateY(-50%);
}
.price__shipping {
  @apply flex flex-row justify-between;
  @apply mb-6;
}
.price__total {
  @apply flex flex-row justify-between;
  @apply mb-6;
}
</style>