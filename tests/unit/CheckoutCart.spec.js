import { shallowMount } from '@vue/test-utils';
import CheckoutCart from '@/components/checkout/CheckoutCart';
import CartItems from '@/components/checkout/cart/CartItems';
import CartTotal from '@/components/checkout/cart/CartTotal';

describe('CheckoutCart', () => {
  it('renders CartItems and TheTotal components', () => {
    const wrapper = shallowMount(CheckoutCart);

    expect(wrapper.findComponent(CartItems).exists()).toBe(true);
    expect(wrapper.findComponent(CartTotal).exists()).toBe(true);
  })
})