'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Crowdfunding = require('./build/Crowdfunding.json');

var _Crowdfunding2 = _interopRequireDefault(_Crowdfunding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Crowdfunding2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3Byb2plY3QuanMiXSwibmFtZXMiOlsid2ViMyIsIkNyb3dkZnVuZGluZyIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXlCLEFBQXpCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyx1QkFBYSxBQUF4QixBQUF0QixZQUEwRCxBQUExRCxBQUFQLEFBQ0g7QUFGRCIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92cm9kaWtvdi93b3Jrc3BhY2UvZXRoZXJldW0vdWRlbXktY29tcGxldGUtZGV2LWd1aWRlL2tpY2tzdGFydC1kYXBwIn0=