import Vue from 'vue'
import Router from 'vue-router'
import daily from '../components/daily'
import plans from '../components/plans'
import test from '../components/test'
import other from '../components/other'
Vue.use(Router)

let routes=[
  {
    path:'/',
    redirect:'/daily'
  },
  {
    path:'/daily',
    component: daily,
    name:'daily'
  },
  {
    path:'/test',
    component: test
  },
  {
    path:'/plans',
    component: plans,
    name:'plans'
  },
  {
    path:'/other',
    component: other,
    name:'other'
  }
]
export default new Router({
  routes: routes
})
