"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _client = _interopRequireDefault(require("../../client"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var resolvers = {
  Query: {
    seeFollowers: function () {
      var _seeFollowers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var username, page, followers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              username = _ref.username, page = _ref.page;
              _context.next = 3;
              return _client["default"].user.findUnique({
                where: {
                  username: username
                }
              }).followers({
                take: 5,
                skip: (page - 1) * 5
              });
            case 3:
              followers = _context.sent;
              return _context.abrupt("return", {
                ok: true,
                followers: followers
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function seeFollowers(_x, _x2) {
        return _seeFollowers.apply(this, arguments);
      }
      return seeFollowers;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;