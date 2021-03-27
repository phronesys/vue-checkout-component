<template>
  <section>
    <div class="cart-items" v-for="item in items" :key="item.id">
      <cart-item @change-and-id="updateCounters" :itemProp="item"/>
    </div>
  </section>
</template>

<script>
import CartItem from "./CartItem";
export default {
  components: {
    CartItem,
  },
  emits: ['setTotalPrice'],
  methods: {
    updateCounters(change, id){
      this.items.forEach( item => {
        if(item.id === id) {
          item.counter += change;
        }
      })
      this.setTotalPrice();
    },
    setTotalPrice(){
      this.totalPrice = 6;
      this.items.forEach( item => {
        this.totalPrice += item.counter * item.offerPrice;
      });
      this.$emit('setTotalPrice', this.totalPrice);
    }
  },
  mounted() {
    this.setTotalPrice();
  },
  data() {
    return {
      totalPrice: 6,
      items: [
        {
          id: 0,
          picture: "cart-item-1.jpeg",
          name: "Silla Gamer",
          offerPrice: 129,
          normalPrice: 200,
          counter: 1,
        },
        {
          id: 1,
          picture: "item-cart-2.jpg",
          name: "Pillows de Chocolate",
          offerPrice: 5,
          normalPrice: 10,
          counter: 1,
        },
      ],
    };
  },
};
</script>

<style lang="postcss">

</style>