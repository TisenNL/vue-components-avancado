import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
// Vue.component('AppAssincrono', (resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       template: '<h2>Component Assincrono</h2>'
//     })
//   }, 2000)
// })

// Vue.component(
//   'AppAssincrono',
//   () => import('./components/AppAssincrono.vue')
// )

new Vue({
  render: h => h(App),
}).$mount('#app')
