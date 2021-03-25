<template>
  <div class="counter">
    <button class="material-icons counter--remove">remove</button>
    <h1 class="text-xl font-semibold">
      {{ counter }}
    </h1>
    <button class="material-icons counter--add">add</button>
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
};
</script>

<style lang="postcss">
.counter {
  @apply flex flex-row items-center;
  @apply px-2 py-3 space-x-6;
  @apply border border-gray-400 rounded-xl;
}
.counter--remove {
  @apply bg-gray-200 rounded h-6;
}
.counter--add {
  @apply bg-gray-200 rounded h-6;
}
</style>
