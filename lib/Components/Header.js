"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? [] : _ref$headers;

  if (Array.isArray(headers) && headers.length > 0) {
    return _react2.default.createElement(
      "thead",
      { className: "table-header" },
      _react2.default.createElement(
        "tr",
        null,
        headers.map(function (header) {
          return _react2.default.createElement(
            "th",
            { key: "Header-" + header },
            header
          );
        })
      )
    );
  }
  return null;
};

Header.propTypes = {
  headers: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
};

exports.default = Header;