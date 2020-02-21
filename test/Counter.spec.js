import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.find('.count').text()).contains('1')
    })
  })
})
