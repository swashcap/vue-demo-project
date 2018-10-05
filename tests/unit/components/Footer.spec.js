import { shallowMount } from '@vue/test-utils'
import Footer from '../../../src/components/Footer.vue'

test('renders footer', () => {
  const wrapper = shallowMount(Footer)
  expect(wrapper.contains('footer')).toBe(true)
});
