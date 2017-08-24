// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DatePicker from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Layout from './components/layout'
import router from './router'

Vue.use(DatePicker)
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
Vue.config.productionTip = false
// const resource = new VueResource({

// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',//跟组件替换成了layout.vue
  components: { Layout }
})
