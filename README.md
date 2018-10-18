# vue-picture-viewer

vue-picture-viewer is a picture viewer for Vue.js.

## component view 

![](http://p8ny46w8x.bkt.clouddn.com/demo.png)
## Demo

[LiveDemo](http://p8ny46w8x.bkt.clouddn.com/index.html?2018-09-22)

## Install

```bash
$ npm install vue-picture-viewer
```

## Import

### Import using module

```js
  // in ES6 modules
  import vuePictureViewer from 'vue-picture-viewer'

  // in CommonJS
  const vuePictureViewer = require('vue-picture-viewer')
  
  Vue.use(vuePictureViewer)
```

### Import using script tag

```html
   <script src="../node_modules/vue-picture-viewer/vue-picture-viewer.js"></script>
   
   // as a component reference
   <vue-picture-viewer></vue-picture-viewer>
```


## Usage

Work on Vue instance
```html
   <vue-picture-viewer :imgData="imgData" :switch="true"></vue-picture-viewer>
```
## Options

### props
  | options | type | Description | Default |
  | -----| -----| -----| -----|
  | imgData| Array | imgUrl and imgName| - |
  | switch | Boolean | Whether to enable thumbnails | true |


## License

MIT

Copyright (c) 2018-present, Joy Sang

