'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _statis = _interopRequireDefault(require("../../models/statis/statis"));

var _userInfo = _interopRequireDefault(require("../../models/v2/userInfo"));

var _order = _interopRequireDefault(require("../../models/bos/order"));

var _admin = _interopRequireDefault(require("../../models/admin/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Statis =
/*#__PURE__*/
function () {
  function Statis() {
    _classCallCheck(this, Statis);
  }

  _createClass(Statis, [{
    key: "apiCount",
    value: function apiCount(req, res, next) {
      var date, count;
      return regeneratorRuntime.async(function apiCount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              date = req.params.date;

              if (date) {
                _context.next = 5;
                break;
              }

              console.log('参数错误');
              res.send({
                status: 0,
                type: 'ERROR_PARAMS',
                message: '参数错误'
              });
              return _context.abrupt("return");

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return regeneratorRuntime.awrap(_statis["default"].find({
                date: date
              }).count());

            case 8:
              count = _context.sent;
              res.send({
                status: 1,
                count: count
              });
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              console.log('获取当天API请求次数失败');
              res.send({
                status: 0,
                type: 'ERROR_GET_TODAY_API_COUNT',
                message: '获取当天API请求次数失败'
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[5, 12]]);
    }
  }, {
    key: "apiAllCount",
    value: function apiAllCount(req, res, next) {
      var count;
      return regeneratorRuntime.async(function apiAllCount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_statis["default"].count());

            case 3:
              count = _context2.sent;
              res.send({
                status: 1,
                count: count
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log('获取所有API请求次数失败');
              res.send({
                status: 0,
                type: 'ERROR_GET_ALL_API_COUNT',
                message: '获取所有API请求次数失败'
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "allApiRecord",
    value: function allApiRecord(req, res, next) {
      var allRecord;
      return regeneratorRuntime.async(function allApiRecord$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_statis["default"].find({}, '-_id -__v'));

            case 3:
              allRecord = _context3.sent;
              res.send(allRecord);
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log('获取所有API请求信息失败');
              res.send({
                status: 0,
                type: 'GET_ALL_API_RECORD_DATA_FAILED',
                message: '获取所有API请求信息失败'
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "userCount",
    value: function userCount(req, res, next) {
      var date, count;
      return regeneratorRuntime.async(function userCount$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              date = req.params.date;

              if (date) {
                _context4.next = 5;
                break;
              }

              console.log('参数错误');
              res.send({
                status: 0,
                type: 'ERROR_PARAMS',
                message: '参数错误'
              });
              return _context4.abrupt("return");

            case 5:
              _context4.prev = 5;
              _context4.next = 8;
              return regeneratorRuntime.awrap(_userInfo["default"].find({
                registe_time: eval('/^' + date + '/gi')
              }).count());

            case 8:
              count = _context4.sent;
              res.send({
                status: 1,
                count: count
              });
              _context4.next = 16;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](5);
              console.log('获取当天注册人数失败');
              res.send({
                status: 0,
                type: 'ERROR_GET_USER_REGISTE_COUNT',
                message: '获取当天注册人数失败'
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[5, 12]]);
    }
  }, {
    key: "adminCount",
    value: function adminCount(req, res, next) {
      var date, count;
      return regeneratorRuntime.async(function adminCount$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              date = req.params.date;

              if (date) {
                _context5.next = 5;
                break;
              }

              console.log('参数错误');
              res.send({
                status: 0,
                type: 'ERROR_PARAMS',
                message: '参数错误'
              });
              return _context5.abrupt("return");

            case 5:
              _context5.prev = 5;
              _context5.next = 8;
              return regeneratorRuntime.awrap(_admin["default"].find({
                create_time: eval('/^' + date + '/gi')
              }).count());

            case 8:
              count = _context5.sent;
              res.send({
                status: 1,
                count: count
              });
              _context5.next = 16;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](5);
              console.log('获取当天注册管理员人数失败');
              res.send({
                status: 0,
                type: 'ERROR_GET_ADMIN_REGISTE_COUNT',
                message: '获取当天注册管理员人数失败'
              });

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[5, 12]]);
    }
  }, {
    key: "orderCount",
    value: function orderCount(req, res, next) {
      var date, count;
      return regeneratorRuntime.async(function orderCount$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              date = req.params.date;

              if (date) {
                _context6.next = 5;
                break;
              }

              console.log('参数错误');
              res.send({
                status: 0,
                type: 'ERROR_PARAMS',
                message: '参数错误'
              });
              return _context6.abrupt("return");

            case 5:
              _context6.prev = 5;
              _context6.next = 8;
              return regeneratorRuntime.awrap(_order["default"].find({
                formatted_created_at: eval('/^' + date + '/gi')
              }).count());

            case 8:
              count = _context6.sent;
              res.send({
                status: 1,
                count: count
              });
              _context6.next = 16;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](5);
              console.log('获取当天订单数量失败');
              res.send({
                status: 0,
                type: 'ERROR_GET_ORDER_COUNT',
                message: '获取当天订单数量失败'
              });

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[5, 12]]);
    }
  }]);

  return Statis;
}();

var _default = new Statis();

exports["default"] = _default;