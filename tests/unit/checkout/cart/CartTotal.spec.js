import { shallowMount } from '@vue/test-utils';
import CartTotal from '@/components/checkout/cart/CartTotal';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CartTotal);
})
afterEach(() => {
  wrapper.unmount();
})
describe('CartTotal', () => {
  it('renders CartItem component', () => {
    const shipping = wrapper.find('.price__shipping').text();
    const total = wrapper.find('.price__total').text();
    expect(shipping).toEqual('Shipping$6');
    expect(total).toEqual('Total$140');
  })
})