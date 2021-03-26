import { shallowMount, mount } from '@vue/test-utils';
import CartItem from '@/components/checkout/cart/CartItem';

describe('CartItem', () => {
  it('won\'t show picture, shows name, price and counter classes', () => {
    const wrapper = shallowMount(CartItem);

    expect(wrapper.find('.picture').exists()).toBe(false);
    expect(wrapper.find('.item__name').exists()).toBe(true);
    expect(wrapper.find('.item__price--offer').exists()).toBe(true);
    expect(wrapper.find('.item__price--normal').exists()).toBe(true);
    expect(wrapper.find('.item__counter').exists()).toBe(true);
  });

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

  // waits 1 second after is mounted, then stop loading
  // and shows the image, this way I can test it easier
  it('shows picture after 0,1 second from mounted hook', () => {
    const wrapper = shallowMount(CartItem);
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.find('.picture').exists()).toBe(false);
    setTimeout(() => {
      expect(wrapper.vm.isLoading).toBe(false);
      expect(wrapper.find('.picture').exists()).toBe(true);
      const picture = wrapper.find('.item__picture');
      expect(picture.attributes().src).toEqual('@/assets/cart-item-1.jpeg')
    }, 100)
  })
})