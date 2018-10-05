import {
  RouterLinkStub,
  shallowMount
} from '@vue/test-utils'
import Header from '../../../src/components/Header.vue'

test('renders header', () => {
  /**
   * Stub the `router-link`  component
   * {@link https://stackoverflow.com/a/50639123}
   */
  const wrapper = shallowMount(Header, {
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
  expect(wrapper.contains('header')).toBe(true)
})