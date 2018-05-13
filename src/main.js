import Vue from 'vue'
import App from './App.vue'
import pictureViewer from './lib/index.js'

Vue.use(pictureViewer)
new Vue({
  el: '#app',
  render: h => h(App)
})
