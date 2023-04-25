"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(require("../client"));
var _default = {
  Message: {
    user: function user(_ref) {
      var id = _ref.id;
      return _client["default"].message.findUnique({
        where: {
          id: id
        }
      }).user();
    }
  },
  Room: {
    users: function users(_ref2) {
      var id = _ref2.id;
      return _client["default"].room.findUnique({
        where: {
          id: id
        }
      }).users();
    },
    messages: function messages(_ref3) {
      var id = _ref3.id;
      return _client["default"].message.findMany({
        where: {
          roomId: id
        }
      });
    },
    unreadTotal: function unreadTotal(_ref4, _, _ref5) {
      var id = _ref4.id;
      var loggedInUser = _ref5.loggedInUser;
      if (!loggedInUser) {
        return 0;
      }
      return _client["default"].message.count({
        where: {
          read: false,
          roomId: id,
          user: {
            id: {
              not: loggedInUser.id
            }
          }
        }
      });
    }
  }
};
exports["default"] = _default;