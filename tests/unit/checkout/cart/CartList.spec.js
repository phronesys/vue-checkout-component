import {shallowMount } from '@vue/test-utils';
import CartList from '@/components/checkout/cart/CartList';
import CartItem from '@/components/checkout/cart/CartItem';

describe('CartList', () => {
  it('renders CartItem component', () => {
    const wrapper = shallowMount(CartList);
    expect(wrapper.findComponent(CartItem).exists()).toBe(true);
  })
})