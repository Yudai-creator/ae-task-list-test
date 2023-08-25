import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImgAvatar from '../imgs/ImgAvatar.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

describe('ImgAvatar', () => {
  const wrapper = mount(ImgAvatar)
  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should have img', () => {
    expect(wrapper.find("img"))
  })
})

// describe('ImgAvatar', () => {
//   it('it has the image link', () => {
//     const wrapper = mount(ImgAvatar)
//     expect(wrapper.html()).toContain("https://ik.imagekit.io/u33i3sss0/figma_pfp(5)_Rrl76Qnuu.png?updatedAt=1692986988771")
//   })
// })