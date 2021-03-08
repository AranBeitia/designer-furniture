import { shallowMount } from '@vue/test-utils'
import TheFooter from '@/ui/views/footer/TheFooter'

describe('The Footer', () => {
  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount(TheFooter)
    expect(wrapper.exists()).toBe(true)
  })
})
