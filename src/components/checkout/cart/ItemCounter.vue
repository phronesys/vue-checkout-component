<template>
  <div class="counter-box">
    <button class="counter--remove material-icons">remove</button>
    <h1 class="counter">
      {{ counter }}
    </h1>
    <button class="counter--add material-icons">add</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: this.counter,
    }
  },
  methods: {

  }
};
</script>

<style lang="postcss">
.counter-box {
  @apply flex flex-row items-center;
  @apply px-2 py-3 space-x-6;
  @apply border border-gray-400 rounded-xl;
}
.counter {
  @apply text-xl font-semibold;
}
.counter--remove {
  @apply bg-gray-200 rounded h-6;
}
.counter--add {
  @apply bg-gray-200 rounded h-6;
}
</style>
