import { mount } from '@vue/test-utils';
import CartTotal from '@/components/checkout/cart/CartTotal';

describe('CartTotal', () => {
  it('shows default values without props', () => {
    const wrapper = mount(CartTotal);
    const shipping = wrapper.find('.price__shipping').text();
    const total = wrapper.find('.price__total').text();
    expect(shipping).toEqual('Shipping$6');
    expect(total).toEqual('Total$140');
  });
  it('shows 0 as shipping and price if totalProp is equal or lesser than 6', () => {
    const wrapper = mount(CartTotal, {
      props: {
        total: Math.floor(Math.random * 5),
      }
    });
    const total = wrapper.find('.price__total').text();
    const shipping = wrapper.find('.price__shipping').text();
    expect(total).toEqual('Total$0');
    expect(shipping).toEqual('Shipping$0');
  })
})