<template>
  <div class="form-label">{{label}}</div>
  <div class="flex flex-row items-center justify-center">
    <label class="material-icons form-icon">{{ icon }}</label>
    <input class="form-input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    }
  },
};
</script>

<style lang="postcss">
.form-label {
  font-size: 0.6rem;
  @apply text-left ml-4 mt-4 mb-1;
  color: #4F4F4F;
  font-weight: 600;
}
.form-icon {
  font-size: 1rem;
  color: #828282;
  transform: translateX(1.6rem) scale(.75);
}
.form-input {
  border: 1px solid #828282;
  border-radius: 12px;
  width: 110%;
  height: 40px;
  margin-left: -.5rem;
  padding-left: 2.6rem;
  color: #333;
  font-weight: 600;
  font-size: 12px;
}
.form-input::placeholder {
  font-size: 0.75rem;
  font-family: "Montserrat";
  font-weight: 600;
  color: #828282;
}
.form-input:focus {
  outline: none;
}
</style>