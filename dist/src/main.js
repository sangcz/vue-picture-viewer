'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _index = require('./lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_index2.default);
new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=main.js.map