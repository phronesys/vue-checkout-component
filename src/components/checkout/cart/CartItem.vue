<template>
  <div class="item">
    <div class="item__picture">
      <img v-if="!isLoading" :src="feedImage" class="picture" />
    </div>
    <div class="item__details">
      <h3 class="item__name">
        {{ item.name }}
      </h3>
      <div class="item__price">
        <h2 class="item__price--offer">${{ item.offerPrice }}</h2>
        <div class="item__price--normal">${{ item.normalPrice }}</div>
      </div>
    </div>
    <div class="item__counter">
      <item-counter
        @update-counters="counterState"
        :counter="item.counter"
      ></item-counter>
    </div>
  </div>
</template>

<script>
import ItemCounter from "./ItemCounter";
export default {
  components: {
    ItemCounter,
  },
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
  methods: {
    counterState(change) {
      this.$emit('changeAndId', change, this.item.id);
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
  @apply grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-4;
  @apply justify-center items-center place-items-center;
  @apply mx-4 my-8 max-w-sm h-32;
}
.item__picture {
  @apply rounded-xl w-32 h-32 row-span-2;
  @apply bg-white overflow-hidden;
}
.picture {
  @apply w-full h-full object-scale-down;
}
/* details */
.item__details {
  @apply justify-self-start self-start;
  @apply flex flex-col gap-y-1;
}
.item__name {
  @apply max-w-max text-left;
  @apply col-span-2;
  @apply text-sm font-semibold;
}
.item__price {
  @apply flex flex-row gap-x-4 items-center;
}
.item__price--offer {
  @apply text-yellow-500 font-semibold;
}
.item__price--normal {
  @apply text-xs font-semibold line-through;
}
.item__counter {
  @apply justify-self-start;
}
</style>