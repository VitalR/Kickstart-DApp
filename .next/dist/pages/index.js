'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

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