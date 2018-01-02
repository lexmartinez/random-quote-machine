import Vue from 'vue'
import Router from 'vue-router'
import RandomQuote from '@/components/RandomQuote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RandomQuote',
      component: RandomQuote
    }
  ]
})
