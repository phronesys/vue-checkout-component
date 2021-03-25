<template>
  <div class="item">
    <div class="item__picture">
      <img v-if="!isLoading" :src="feedImage" class="picture" />
    </div>
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
    </div>
    <div class="item__counter">
      {{ item.counter }}
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
      isLoading: true,
    };
  },
  computed: {
    feedImage() {
      return require(`@/assets/${this.item.picture}`);
    },
  },
  async mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  },
};
</script>

<style lang="postcss">
.item {
  @apply grid grid-rows-2 grid-cols-2 gap-5;
  @apply justify-center items-center place-items-center;
  /* testing */
  @apply bg-gray-400;
}
.item__picture {
  @apply rounded-lg w-32 h-32 row-span-2;
  @apply bg-white;
}
.picture {
  @apply w-full h-full object-scale-down;
}
/* details */
.item__details {
  @apply justify-self-start;
  @apply grid grid-cols-2;
}
.item__name {
  @apply col-span-2;
}
.item__price--offer {
}
.item__price--normal {
}
.item__counter {
  @apply justify-self-start;
}
</style>