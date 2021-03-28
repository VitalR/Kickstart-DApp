webpackHotUpdate(6,{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(529);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vrodikov/workspace/ethereum/udemy-complete-dev-guide/kickstart-dapp/pages/index.js?entry';


var CrowdfundingIndex = function (_Component) {
    (0, _inherits3.default)(CrowdfundingIndex, _Component);

    function CrowdfundingIndex() {
        (0, _classCallCheck3.default)(this, CrowdfundingIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CrowdfundingIndex.__proto__ || (0, _getPrototypeOf2.default)(CrowdfundingIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CrowdfundingIndex, [{
        key: 'render',

        // async componentDidMount() {
        //     const crowdfunds = await factory.methods.getDeployedCrowdfunding().call()

        //     console.log(crowdfunds)
        // }

        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, this.props.crowdfunds[0]);
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var crowdfunds;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCrowdfunding().call();

                            case 2:
                                crowdfunds = _context.sent;
                                return _context.abrupt('return', { crowdfunds: crowdfunds });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CrowdfundingIndex;
}(_react.Component);

exports.default = CrowdfundingIndex;

// export default () => {
//     return (
//         <h1>This is the crowdfunding list page!!!</h1>
//     )
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNyb3dkZnVuZGluZ0luZGV4IiwicHJvcHMiLCJjcm93ZGZ1bmRzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ3Jvd2RmdW5kaW5nIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7Ozs7Ozs7Ozs7YUFPRjs7QUFDQTtBQUVBOztBQUNBOzs7aUNBRVMsQUFDTDttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFNO0FBQU47QUFBQSxhQUFBLE9BQU0sQUFBSyxNQUFMLEFBQVcsV0FBeEIsQUFBTyxBQUFNLEFBQXNCLEFBQ3RDOzs7Ozs7Ozs7Ozs7dUNBYjRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQiwwQkFBaEIsQUFBMEMsQTs7aUNBQTdEO0E7aUVBRUMsRUFBRSxZQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKaUIsQSxBQWtCaEM7O2tCQUFBLEFBQWU7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdnJvZGlrb3Yvd29ya3NwYWNlL2V0aGVyZXVtL3VkZW15LWNvbXBsZXRlLWRldi1ndWlkZS9raWNrc3RhcnQtZGFwcCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/vrodikov/workspace/ethereum/udemy-complete-dev-guide/kickstart-dapp/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vrodikov/workspace/ethereum/udemy-complete-dev-guide/kickstart-dapp/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42YzUyMGY4ZmVmNDcxNDY2ZTI0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OWExYmFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xuXG5jbGFzcyBDcm93ZGZ1bmRpbmdJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgY3Jvd2RmdW5kcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENyb3dkZnVuZGluZygpLmNhbGwoKVxuXG4gICAgICAgIHJldHVybiB7IGNyb3dkZnVuZHMgfVxuICAgIH1cblxuICAgIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICBjb25zdCBjcm93ZGZ1bmRzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ3Jvd2RmdW5kaW5nKCkuY2FsbCgpXG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coY3Jvd2RmdW5kcylcbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2Pnt0aGlzLnByb3BzLmNyb3dkZnVuZHNbMF19PC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm93ZGZ1bmRpbmdJbmRleFxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8aDE+VGhpcyBpcyB0aGUgY3Jvd2RmdW5kaW5nIGxpc3QgcGFnZSEhITwvaDE+XG4vLyAgICAgKVxuLy8gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOzs7QUFHQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFaQTtBQUNBO0FBREE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9