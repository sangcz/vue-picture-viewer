import pictureViewer from './PictureViewer'

const viewer = {
  install (Vue, options) {
    Vue.component(pictureViewer.name, pictureViewer)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(viewer)
}

export default viewer
