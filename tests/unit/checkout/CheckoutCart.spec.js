import { shallowMount } from '@vue/test-utils';
import CheckoutCart from '@/components/checkout/CheckoutCart';
import CartList from '@/components/checkout/cart/CartList';
import CartTotal from '@/components/checkout/cart/CartTotal';

describe('CheckoutCart', () => {
  it('renders CartList and TheTotal components', () => {
    const wrapper = shallowMount(CheckoutCart);
    expect(wrapper.findComponent(CartList).exists()).toBe(true);
    expect(wrapper.findComponent(CartTotal).exists()).toBe(true);
  })
})