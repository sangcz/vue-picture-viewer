import Vue from 'vue'
import App from './App.vue'
import vuePictureViewer from './lib/index.js'

Vue.use(vuePictureViewer)
new Vue({
  el: '#app',
  render: h => h(App)
})
