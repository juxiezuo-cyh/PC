import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import DetailForPage from '../pages/detail/forecast'
import DetailCouPage from '../pages/detail/count'
import DetailAnaPage from '../pages/detail/analysis'
import DetailPubPage from '../pages/detail/publish'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path:'/detail',
      component: DetailPage,
      children: [
        {
          path:'analysis',
          component: DetailAnaPage
        },
        {
          path:'count',
          component: DetailCouPage
        },
        {
          path:'forecast',
          component: DetailForPage
        },
        {
          path:'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
