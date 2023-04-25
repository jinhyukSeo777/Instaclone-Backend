"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _client = _interopRequireDefault(require("../../client"));
var resolvers = {
  Query: {
    seeProfile: function () {
      var _seeProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var username, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              username = _ref.username;
              _context.next = 3;
              return _client["default"].user.findUnique({
                where: {
                  username: username
                },
                include: {
                  following: true,
                  followers: true
                }
              });
            case 3:
              user = _context.sent;
              if (!user) {
                //...
              }
              return _context.abrupt("return", user);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function seeProfile(_x, _x2) {
        return _seeProfile.apply(this, arguments);
      }
      return seeProfile;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;