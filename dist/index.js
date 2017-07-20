'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

require('../dist/scroller.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactScroller = function (_React$Component) {
  _inherits(ReactScroller, _React$Component);

  function ReactScroller(props, context) {
    _classCallCheck(this, ReactScroller);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactScroller).call(this, props, context));
  }

  _createClass(ReactScroller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var config = _props.config;
      var startPosition = _props.startPosition;


      this.scroller = new Scroller(_extends({
        el: this.refs.root
      }, config));

      this.scroller.update(_extends({}, config));

      if (startPosition) {
        var endpoint = startPosition.position;
        var speed = startPosition.speed;
        this.scroller.scrollTo(endpoint, speed);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var config = this.props.config;

      this.scroller.update(_extends({}, config));
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.children.length !== this.props.children.length || !(0, _lodash.isEqual)(nextProps.config, this.props.config);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var prefix = 'ab_scroller';

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: '' + prefix },
        _react2.default.createElement(
          'div',
          { className: prefix + '-wrapper' },
          _react2.default.createElement('div', { className: prefix + '-border ' + prefix + '-border--left' }),
          _react2.default.createElement('div', { className: prefix + '-border ' + prefix + '-border--right' }),
          _react2.default.createElement(
            'div',
            { className: prefix + '-strip' },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: prefix + '-scrollwrap' },
            _react2.default.createElement('div', { className: prefix + '-scrollbar' })
          ),
          _react2.default.createElement('div', { className: prefix + '-anchors' })
        )
      );
    }
  }]);

  return ReactScroller;
}(_react2.default.Component);

exports.default = ReactScroller;
