import vuePictureViewer from './vue-picture-viewer'

const pictureviewer = {
  install (Vue, options) {
    Vue.component(vuePictureViewer.name, vuePictureViewer)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(pictureviewer)
}

export default pictureviewer
