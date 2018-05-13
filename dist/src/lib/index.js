'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VueViewer = require('./VueViewer');

var _VueViewer2 = _interopRequireDefault(_VueViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewer = {
  install: function install(Vue, options) {
    Vue.component(_VueViewer2.default.name, _VueViewer2.default);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(viewer);
}

exports.default = viewer;
//# sourceMappingURL=index.js.map