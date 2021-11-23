'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var adminSchema = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: {
    type: String,
    "default": '管理员'
  },
  status: Number,
  avatar: {
    type: String,
    "default": 'default.jpg'
  },
  city: String
});
adminSchema.index({
  id: 1
});

var Admin = _mongoose["default"].model('Admin', adminSchema);

var _default = Admin;
exports["default"] = _default;