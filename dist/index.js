'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleClickHighlightable = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceWith = function replaceWith(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _react2.default.createElement(type, props, children);
  };
};
var SingleClickHighlightable = exports.SingleClickHighlightable = function SingleClickHighlightable(_ref2) {
  var _ref2$children = _ref2.children,
      type = _ref2$children.type,
      props = _ref2$children.props;
  var children = props.children,
      onClick = props.onClick;

  var returnWith = replaceWith({ children: children, type: type });
  var onClickHandler = function onClickHandler() {
    if (!window.getSelection().toString()) {
      onClick.apply(undefined, arguments);
    }
  };
  return returnWith(Object.assign({}, props, { onClick: onClickHandler }));
};

SingleClickHighlightable.propTypes = {
  children: _propTypes2.default.element.isRequired
};

exports.default = SingleClickHighlightable;
