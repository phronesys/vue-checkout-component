import { shallowMount } from '@vue/test-utils';
import CartList from '@/components/checkout/cart/CartList';
import CartItem from '@/components/checkout/cart/CartItem';

const SILLA_GAMER_POS = 0;
const PILLOWS_POS = 1;
const REMOVE = -1;
const ADD = 1;

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CartList);
})
afterEach(() => {
  wrapper.unmount();
})
describe('CartList', () => {
  it('renders CartItem component', () => {
    expect(wrapper.findComponent(CartItem).exists()).toBe(true);
  })
  //sends total price of all items on the cart to the parent component
  it('updateCounters change the counter of the given id', () => {
    const wrapper = shallowMount(CartList);
    wrapper.vm.updateCounters(REMOVE, SILLA_GAMER_POS);
    expect(wrapper.vm.items[0].counter).toEqual(0); // no chairs
    wrapper.vm.updateCounters(ADD, SILLA_GAMER_POS);
    wrapper.vm.updateCounters(ADD, SILLA_GAMER_POS);
    expect(wrapper.vm.items[0].counter).toEqual(2); // two chairs

    wrapper.vm.updateCounters(ADD, PILLOWS_POS);
    wrapper.vm.updateCounters(ADD, PILLOWS_POS);
    wrapper.vm.updateCounters(ADD, PILLOWS_POS);
    expect(wrapper.vm.items[1].counter).toEqual(4);
  })
  it('after updateCounters emits the new total price', () => {
    const CHAIR_OFFER_PRICE = 129;
    const PILLOWS_OFFER_PRICE = 5;
    const SHIPPING = 6;
    const TOTAL_DEFAULT = CHAIR_OFFER_PRICE + PILLOWS_OFFER_PRICE + SHIPPING;
    expect(wrapper.vm.totalPrice).toEqual(TOTAL_DEFAULT);
    wrapper.vm.updateCounters(REMOVE, SILLA_GAMER_POS); 
    // - 126
    expect(wrapper.vm.totalPrice).toEqual(TOTAL_DEFAULT - CHAIR_OFFER_PRICE);
    wrapper.vm.updateCounters(ADD, SILLA_GAMER_POS);
    wrapper.vm.updateCounters(ADD, SILLA_GAMER_POS);
    // we have 2 chairs now
    expect(wrapper.vm.totalPrice).toEqual(TOTAL_DEFAULT + CHAIR_OFFER_PRICE);
  })
})