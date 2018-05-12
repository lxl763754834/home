import Vue from 'vue'
import Router from 'vue-router'
import daily from '../components/daily'
import plans from '../components/plans'
import test from '../components/test'
import other from '../components/other'
Vue.use(Router)

let routes=[
  {
    path:'/test',
    component: test
  },
  {
    path:'/daily',
    component: daily
  },
  {
    path:'/plans',
    component: plans
  },
  {
    path:'/other',
    component: other
  }
]
export default new Router({
  routes: routes
})
