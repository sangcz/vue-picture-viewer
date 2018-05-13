# vue-picture-viewer

vue-picture-viewer is a picture viewer for Vue.js.

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
```

### Import using script tag

```html
   <script src="../node_modules/vue-picture-viewer/vue-picture-viewer.js"></script>
```

```js
    const vuePictureViewer = vuePictureViewer
    new Vue({
      el: '#app',
      components: {
        'vue-picture-viewer': vuePictureViewer
      }
    })
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

## Development

Watching with hot-reload

```bash
  $ npm run dev
```

## License

MIT

Copyright (c) 2018-present, Joy Sang

