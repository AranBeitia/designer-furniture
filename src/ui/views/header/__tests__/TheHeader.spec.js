import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/ui/views/header/TheHeader'

describe('The Footer', () => {
  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.exists()).toBe(true)
  })
})