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
  it('updates total calling updateTotal', () => {
    const wrapper = shallowMount(CheckoutCart);
    expect(wrapper.vm.totalPrice).toEqual(0);
    const ANY_TOTAL = 100;
    wrapper.vm.updateTotal(ANY_TOTAL);
    expect(wrapper.vm.totalPrice).toEqual(100);
  })
})