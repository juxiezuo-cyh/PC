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
      redirect:'/detail/analysis',//为了不让用户访问一些不想展示的页面，所以使用了重定向redirect.
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
