import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import VueRouter from 'vue-router'

import ArticleSummary from '../../../src/components/ArticleSummary.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

test('renders article summary', () => {
  const id = 101
  const summary = 'Burning up his fuse up here alone'
  const title = 'Rocket Man'
  const wrapper = shallowMount(ArticleSummary, {
    localVue,
    propsData: {
      id,
      summary,
      title
    },
    router
  })

  expect(wrapper.element).toMatchSnapshot()

  expect(wrapper.find('router-link-stub').attributes('to'))
    .toBe(`/article/${id}`)

  expect(wrapper.find('h1').text()).toBe(title)
  expect(wrapper.find('p').text()).toBe(summary)
})