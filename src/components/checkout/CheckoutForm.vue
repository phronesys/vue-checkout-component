<template>
  <form class="form" action="#">
    <div class="form-titles">Contact information</div>
    <form-input
      placeholder="Enter your email..."
      icon="email"
      label="E-mail"
    ></form-input>
    <form-input
      placeholder="Enter your phone..."
      icon="phone"
      label="Phone"
    ></form-input>
    <div class="my-10"></div>
    <div class="form-titles">Shipping address</div>
    <form-input
      placeholder="Your name.."
      icon="account_circle"
      label="Full name"
    ></form-input>
    <form-input
      placeholder="Your address.."
      icon="home"
      label="Address"
    ></form-input>
    <form-input
      placeholder="Your city.."
      icon="location_city"
      label="City"
    ></form-input>
  </form>
</template>

<script>
import FormInput from "./form/FormInput.vue";
export default {
  components: {
    FormInput,
  },
};
</script>

<style lang="postcss">
.form {
  width: 360px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  
}
.form-titles {
  font-weight: 600;
  font-size: 14px;
  @apply text-left ml-4 mt-4 mb-2;
}
</style>