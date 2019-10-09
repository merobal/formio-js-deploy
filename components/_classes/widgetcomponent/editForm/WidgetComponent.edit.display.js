"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  weight: 400,
  type: 'select',
  input: true,
  key: 'widget.type',
  label: 'Widget',
  placeholder: 'Select a widget',
  tooltip: 'The widget is the display UI used to input the value of the field.',
  defaultValue: 'input',
  onChange: function onChange(context) {
    context.data.widget = _lodash.default.pick(context.data.widget, 'type');
  },
  dataSrc: 'values',
  data: {
    values: [{
      label: 'Input Field',
      value: 'input'
    }, {
      label: 'Calendar Picker',
      value: 'calendar'
    }]
  },
  conditional: {
    json: {
      '===': [{
        var: 'data.type'
      }, 'textfield']
    }
  }
}];
exports.default = _default;