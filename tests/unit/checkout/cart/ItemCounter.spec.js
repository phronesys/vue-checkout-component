import { shallowMount } from '@vue/test-utils';
import ItemCounter from '@/components/checkout/cart/ItemCounter';

let wrapper = null;
beforeEach(()=> {
  wrapper = shallowMount(ItemCounter);
})
afterEach(() => {
  wrapper.unmount();
})
describe('ItemCounter', () => {
  it('renders two buttons and one counter', () => {
    expect(wrapper.find('.counter--remove').text()).toEqual('remove');
    expect(wrapper.findAll('.counter')).toHaveLength(1);
    expect(wrapper.find('.counter--add').text()).toEqual('add');
  })

  it('pressing add and remove buttons will increase or decrease the counter', async () => {
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

  it('won\'t let item count go below 0', async () => {
    const remove = wrapper.find('.counter--remove');
    const count = wrapper.find('.counter');

    await remove.trigger('click');
    expect(count.text()).toEqual('0');
    await remove.trigger('click');
    expect(count.text()).toEqual('0');
    await remove.trigger('click');
    expect(count.text()).toEqual('0');
  })
  it('emits update-counters', async () => {
    const remove = wrapper.find('.counter--remove');
    const add = wrapper.find('.counter--add');
    await remove.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('updateCounters')
    await add.trigger('click');
    expect(wrapper.emitted().updateCounters).toHaveLength(2);
    expect(wrapper.emitted().updateCounters[0]).toEqual([-1]);
    expect(wrapper.emitted().updateCounters[1]).toEqual([1]);
  })
})