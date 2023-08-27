import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BtnTask from '../BtnTask.vue'


describe('BtnTask', () => {
    const wrapper = mount(BtnTask)
    it('should render properly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
    it('should have img', () => {
      expect(wrapper.find("img"))
    })
    it('should have text', () => {
        expect(wrapper.find("p"))
    })
  })