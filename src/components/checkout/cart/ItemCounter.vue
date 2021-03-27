<template>
  <div class="counter-box">
    <button class="counter--remove material-icons" @click="remove">
      remove
    </button>
    <h1 class="counter">
      {{ count }}
    </h1>
    <button class="counter--add material-icons" @click="add">add</button>
  </div>
</template>

<script>
export default {
  emits: ["updateCounters"],
  props: {
    counter: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: this.counter,
    };
  },
  methods: {
    add() {
      return this.count++;
    },
    remove() {
      return this.count <= 0 ? this.count : this.count--;
    },
    sendEmit(change) {
      this.$emit("updateCounters", change);
    },
  },
  watch: {
    count(state, prevState) {
      if (state < prevState) {
        this.sendEmit(-1);
      } else {
        this.sendEmit(1);
      }
    },
  },
};
</script>

<style lang="postcss">
.counter-box {
  @apply flex flex-row items-center;
  @apply px-2 py-3 space-x-6;
  @apply border border-gray-400 rounded-xl;
}
.counter {
  @apply text-xl font-semibold w-4;
}
/* I could apply different animations for adding and removing */
.counter--remove {
  @apply bg-gray-200 rounded h-6;
}
.counter--add {
  @apply bg-gray-200 rounded h-6;
}
</style>
