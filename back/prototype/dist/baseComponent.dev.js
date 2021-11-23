"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _ids = _interopRequireDefault(require("../models/ids"));

var _formidable = _interopRequireDefault(require("formidable"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _qiniu = _interopRequireDefault(require("qiniu"));

var _gm = _interopRequireDefault(require("gm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_qiniu["default"].conf.ACCESS_KEY = 'Ep714TDrVhrhZzV2VJJxDYgGHBAX-KmU1xV1SQdS';
_qiniu["default"].conf.SECRET_KEY = 'XNIW2dNffPBdaAhvm9dadBlJ-H6yyCTIJLxNM_N6';

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    this.idList = ['restaurant_id', 'food_id', 'order_id', 'user_id', 'address_id', 'cart_id', 'img_id', 'category_id', 'item_id', 'sku_id', 'admin_id', 'statis_id'];
    this.imgTypeList = ['shop', 'food', 'avatar', 'default'];
    this.uploadImg = this.uploadImg.bind(this);
    this.qiniu = this.qiniu.bind(this);
  }

  _createClass(BaseComponent, [{
    key: "fetch",
    value: function fetch() {
      var url,
          data,
          type,
          resType,
          dataStr,
          requestConfig,
          responseJson,
          response,
          _args = arguments;
      return regeneratorRuntime.async(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              type = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';
              resType = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'JSON';
              type = type.toUpperCase();
              resType = resType.toUpperCase();

              if (type == 'GET') {
                dataStr = ''; //数据拼接字符串

                Object.keys(data).forEach(function (key) {
                  dataStr += key + '=' + data[key] + '&';
                });

                if (dataStr !== '') {
                  dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                  url = url + '?' + dataStr;
                }
              }

              requestConfig = {
                method: type,
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              };

              if (type == 'POST') {
                Object.defineProperty(requestConfig, 'body', {
                  value: JSON.stringify(data)
                });
              }

              _context.prev = 9;
              _context.next = 12;
              return regeneratorRuntime.awrap((0, _nodeFetch["default"])(url, requestConfig));

            case 12:
              response = _context.sent;

              if (!(resType === 'TEXT')) {
                _context.next = 19;
                break;
              }

              _context.next = 16;
              return regeneratorRuntime.awrap(response.text());

            case 16:
              responseJson = _context.sent;
              _context.next = 22;
              break;

            case 19:
              _context.next = 21;
              return regeneratorRuntime.awrap(response.json());

            case 21:
              responseJson = _context.sent;

            case 22:
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](9);
              console.log('获取http数据失败', _context.t0);
              throw new Error(_context.t0);

            case 28:
              return _context.abrupt("return", responseJson);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[9, 24]]);
    } //获取id列表

  }, {
    key: "getId",
    value: function getId(type) {
      var idData;
      return regeneratorRuntime.async(function getId$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.idList.includes(type)) {
                _context2.next = 4;
                break;
              }

              console.log('id类型错误');
              throw new Error('id类型错误');

            case 4:
              _context2.prev = 4;
              _context2.next = 7;
              return regeneratorRuntime.awrap(_ids["default"].findOne());

            case 7:
              idData = _context2.sent;
              idData[type]++;
              _context2.next = 11;
              return regeneratorRuntime.awrap(idData.save());

            case 11:
              return _context2.abrupt("return", idData[type]);

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](4);
              console.log('获取ID数据失败');
              throw new Error(_context2.t0);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[4, 14]]);
    }
  }, {
    key: "uploadImg",
    value: function uploadImg(req, res, next) {
      var type, image_path;
      return regeneratorRuntime.async(function uploadImg$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              type = req.params.type;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(this.getPath(req, res));

            case 4:
              image_path = _context3.sent;
              res.send({
                status: 1,
                image_path: image_path
              });
              _context3.next = 12;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.log('上传图片失败', _context3.t0);
              res.send({
                status: 0,
                type: 'ERROR_UPLOAD_IMG',
                message: '上传图片失败'
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[1, 8]]);
    }
  }, {
    key: "getPath",
    value: function getPath(req, res) {
      var _this = this;

      return regeneratorRuntime.async(function getPath$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve, reject) {
                var form = _formidable["default"].IncomingForm();

                form.uploadDir = './public/img';
                form.parse(req, function _callee2(err, fields, files) {
                  var img_id, hashName, extname, fullName, repath;
                  return regeneratorRuntime.async(function _callee2$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return regeneratorRuntime.awrap(_this.getId('img_id'));

                        case 3:
                          img_id = _context5.sent;
                          _context5.next = 11;
                          break;

                        case 6:
                          _context5.prev = 6;
                          _context5.t0 = _context5["catch"](0);
                          console.log('获取图片id失败');

                          _fs["default"].unlinkSync(files.file.path);

                          reject('获取图片id失败');

                        case 11:
                          hashName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16) + img_id;
                          extname = _path["default"].extname(files.file.name);

                          if (['.jpg', '.jpeg', '.png'].includes(extname)) {
                            _context5.next = 18;
                            break;
                          }

                          _fs["default"].unlinkSync(files.file.path);

                          res.send({
                            status: 0,
                            type: 'ERROR_EXTNAME',
                            message: '文件格式错误'
                          });
                          reject('上传失败');
                          return _context5.abrupt("return");

                        case 18:
                          fullName = hashName + extname;
                          repath = './public/img/' + fullName;

                          try {
                            _fs["default"].renameSync(files.file.path, repath);

                            (0, _gm["default"])(repath).resize(200, 200, "!").write(repath, function _callee(err) {
                              return regeneratorRuntime.async(function _callee$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      // if(err){
                                      // 	console.log('裁切图片失败');
                                      // 	reject('裁切图片失败');
                                      // 	return
                                      // }
                                      resolve(fullName);

                                    case 1:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              });
                            });
                          } catch (err) {
                            console.log('保存图片失败', err);

                            if (_fs["default"].existsSync(repath)) {
                              _fs["default"].unlinkSync(repath);
                            } else {
                              _fs["default"].unlinkSync(files.file.path);
                            }

                            reject('保存图片失败');
                          }

                        case 21:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, null, null, [[0, 6]]);
                });
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }, {
    key: "qiniu",
    value: function qiniu(req) {
      var _this2 = this;

      var type,
          _args8 = arguments;
      return regeneratorRuntime.async(function qiniu$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              type = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 'default';
              return _context8.abrupt("return", new Promise(function (resolve, reject) {
                var form = _formidable["default"].IncomingForm();

                form.uploadDir = './public/img';
                form.parse(req, function _callee3(err, fields, files) {
                  var img_id, hashName, extname, repath, key, token, qiniuImg;
                  return regeneratorRuntime.async(function _callee3$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.prev = 0;
                          _context7.next = 3;
                          return regeneratorRuntime.awrap(_this2.getId('img_id'));

                        case 3:
                          img_id = _context7.sent;
                          _context7.next = 11;
                          break;

                        case 6:
                          _context7.prev = 6;
                          _context7.t0 = _context7["catch"](0);
                          console.log('获取图片id失败');

                          _fs["default"].unlinkSync(files.file.path);

                          reject('获取图片id失败');

                        case 11:
                          hashName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16) + img_id;
                          extname = _path["default"].extname(files.file.name);
                          repath = './public/img/' + hashName + extname;
                          _context7.prev = 14;
                          key = hashName + extname;
                          _context7.next = 18;
                          return regeneratorRuntime.awrap(_fs["default"].rename(files.file.path, repath));

                        case 18:
                          token = _this2.uptoken('node-elm', key);
                          _context7.next = 21;
                          return regeneratorRuntime.awrap(_this2.uploadFile(token.toString(), key, repath));

                        case 21:
                          qiniuImg = _context7.sent;

                          _fs["default"].unlinkSync(repath);

                          resolve(qiniuImg);
                          _context7.next = 31;
                          break;

                        case 26:
                          _context7.prev = 26;
                          _context7.t1 = _context7["catch"](14);
                          console.log('保存失败', _context7.t1);

                          _fs["default"].unlinkSync(files.file.path);

                          reject('保存至七牛失败');

                        case 31:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, null, null, [[0, 6], [14, 26]]);
                });
              }));

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      });
    }
  }, {
    key: "uptoken",
    value: function uptoken(bucket, key) {
      var putPolicy = new _qiniu["default"].rs.PutPolicy(bucket + ":" + key);
      return putPolicy.token();
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(uptoken, key, localFile) {
      return new Promise(function (resolve, reject) {
        var extra = new _qiniu["default"].io.PutExtra();

        _qiniu["default"].io.putFile(uptoken, key, localFile, extra, function (err, ret) {
          if (!err) {
            resolve(ret.key);
          } else {
            console.log('图片上传失败', err);
            reject(err);
          }
        });
      });
    }
  }]);

  return BaseComponent;
}();

exports["default"] = BaseComponent;