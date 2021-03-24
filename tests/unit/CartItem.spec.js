import { shallowMount } from '@vue/test-utils';
import CartItem from '@/components/checkout/cart/CartItem';

describe('CartItem', () => {
  it('shows picture, name, price and counter classes', () => {
    const wrapper = shallowMount(CartItem);

    expect(wrapper.find('.item__picture').exists()).toBe(true);
    expect(wrapper.find('.item__name').exists()).toBe(true);
    expect(wrapper.find('.item__price--offer').exists()).toBe(true);
    expect(wrapper.find('.item__price--normal').exists()).toBe(true);
    expect(wrapper.find('.item__counter').exists()).toBe(true);
  });
  it('show parent props inside tags on: name, prices, and default count as 1', () => {
    const wrapper = shallowMount(CartItem, {
      props: {
        item: {
          type: Object,
          default: {
            id: 0,
            picture: "",
            name: "Silla Gamer",
            offerPrice: 129,
            normalPrice: 200,
            counter: 1,
          }
        }
      }
    })

    const name = wrapper.find('.item__name');
    const offerPrice = wrapper.find('.item__price--offer');
    const normalPrice = wrapper.find('.item__price--normal');
    const counter = wrapper.find('.item__counter');
    
    expect(name.text()).toEqual('Silla Gamer');
    expect(offerPrice.text()).toEqual("129");
    expect(normalPrice.text()).toEqual("200");
    expect(counter.text()).toEqual("1");
  })
})