import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImgAvatar from '../imgs/ImgAvatar.vue'


describe('ImgAvatar', () => {
  const wrapper = mount(ImgAvatar)
  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should have img', () => {
    expect(wrapper.find("img"))
  })
})
