import { shallowMount, mount } from '@vue/test-utils';
import CartItem from '@/components/checkout/cart/CartItem';
import ItemCounter from '@/components/checkout/cart/ItemCounter';

let wrapper = null;
beforeEach(() => {
  wrapper = shallowMount(CartItem);
});
afterEach(() => {
  wrapper.unmount();
})

describe('CartItem', () => {
  it('won\'t show picture, shows name, price and counter classes', () => {
    expect(wrapper.find('.picture').exists()).toBe(false);
    expect(wrapper.find('.item__name').exists()).toBe(true);
    expect(wrapper.find('.item__price--offer').exists()).toBe(true);
    expect(wrapper.find('.item__price--normal').exists()).toBe(true);
    expect(wrapper.find('.item__counter').exists()).toBe(true);
  });
  it('renders ItemCounter component', ()=> {
    expect(wrapper.findComponent(ItemCounter).exists()).toBe(true);
  })
  it('ItemCounter emits counterState', async () => {
    // await wrapper.findComponent(ItemCounter).trigger('update-counters');
    // changeAndId[x][y] => x is change and y is the id
    await wrapper.vm.counterState(-1);
    expect(wrapper.emitted().changeAndId[0][0]).toBe(-1);
    await wrapper.vm.counterState(1);
    expect(wrapper.emitted().changeAndId[1][0]).toBe(1);
  })
  it('show parent props inside tags on: name, prices, and default count as 1', () => {
    const wrapper = mount(CartItem, {
      props: {
        item: {
          type: Object,
          default: {
            id: 0,
            picture: "cart-item-1.jpeg",
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
    expect(offerPrice.text()).toEqual("$129");
    expect(normalPrice.text()).toEqual("$200");
    expect(counter.find('.counter').text()).toEqual("1");
  })

  // waits 0,1 second after is mounted, then stop loading
  // and shows the image, this way is easier to test
  it('shows picture after 0,1 second from mounted hook', () => {
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.find('.picture').exists()).toBe(false);
    setTimeout(() => {
      expect(wrapper.vm.isLoading).toBe(false);
      expect(wrapper.find('.picture').exists()).toBe(true);
      const picture = wrapper.find('.item__picture');
      expect(picture.attributes().src).toEqual('@/assets/cart-item-1.jpeg')
    }, 100)
  });

})