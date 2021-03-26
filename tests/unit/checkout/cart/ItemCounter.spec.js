import { shallowMount } from '@vue/test-utils';
import ItemCounter from '@/components/checkout/cart/ItemCounter';

describe('ItemCounter', () => {

  it('renders two buttons and one counter', () => {
    const wrapper = shallowMount(ItemCounter);
    expect(wrapper.find('.counter--remove').text()).toEqual('remove');
    expect(wrapper.find('.counter').text()).toEqual('1');
    expect(wrapper.find('.counter--add').text()).toEqual('add');
  })

  it('pressing add and remove buttons increases or decrease the counter', async () => {
    const wrapper = shallowMount(ItemCounter);
    const remove = wrapper.find('.counter--remove');
    const add = wrapper.find('.counter--add');
    const count = wrapper.find('.counter');

    await add.trigger('click');
    expect(count.text()).toEqual('2');
    await add.trigger('click');
    expect(count.text()).toEqual('3');
    await remove.trigger('click');
    expect(count.text()).toEqual('2');
    await remove.trigger('click');
    expect(count.text()).toEqual('1');
    await add.trigger('click');
    expect(count.text()).toEqual('2');
  })
})