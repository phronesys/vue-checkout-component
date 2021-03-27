import { shallowMount } from '@vue/test-utils';
import TheCheckout from '@/components/TheCheckout.vue';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import CheckoutCart from '@/components/checkout/CheckoutCart';

describe('TheCheckout', () => {
  it('renders CheckoutForm and CheckoutCart components', () => {
    const wrapper = shallowMount(TheCheckout);

    expect(wrapper.findComponent(CheckoutForm).exists()).toBe(true);
    expect(wrapper.findComponent(CheckoutCart).exists()).toBe(true);
  })

  it('shows "The Checkout" title', () => {
    const wrapper = shallowMount(TheCheckout);

    expect(wrapper.find('.checkout__title').exists()).toBe(true);
    const title = wrapper.find('.checkout__title');
    expect(title.text()).toContain('Checkout');
  })
})
