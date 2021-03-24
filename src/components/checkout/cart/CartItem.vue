<template>
  <div class="item">
    <img
      :src="require(`../../../assets/${item.picture}`)"
      class="item__picture"
    >
    <div class="item__details">
      <h3 class="item__name">
        {{ item.name }}
      </h3>
      <h2 class="item__price--offer">
        {{ item.offerPrice }}
      </h2>
      <div class="item__price--normal">
        {{ item.normalPrice }}
      </div>
      <div class="item__counter">
        {{ item.counter }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemProp: {
      type: Object,
      default: function () {
        return {
          id: 0,
          picture: "cart-item-1.jpeg",
          name: "Silla Gamer",
          offerPrice: 129,
          normalPrice: 200,
          counter: 1,
        };
      },
    },
  },
  data() {
    return {
      item: this.itemProp,
    };
  },
};
</script>

<style lang="postcss">
.item__picture {
  @apply w-40;
}
</style>