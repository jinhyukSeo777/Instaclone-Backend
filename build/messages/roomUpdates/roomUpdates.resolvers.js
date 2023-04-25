"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _constants = require("../../constants");
var _pubsub = _interopRequireDefault(require("../../pubsub"));
var _graphqlSubscriptions = require("graphql-subscriptions");
var _client = _interopRequireDefault(require("../../client"));
var _default = {
  Subscription: {
    roomUpdates: {
      subscribe: function () {
        var _subscribe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(root, args, context, info) {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (0, _graphqlSubscriptions.withFilter)(function () {
                  return _pubsub["default"].asyncIterator(_constants.NEW_MESSAGE);
                }, /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, _ref2, _ref3) {
                    var roomUpdates, id, loggedInUser;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          roomUpdates = _ref.roomUpdates;
                          id = _ref2.id;
                          loggedInUser = _ref3.loggedInUser;
                          return _context.abrupt("return", true);
                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function (_x5, _x6, _x7) {
                    return _ref4.apply(this, arguments);
                  };
                }())(root, args, context, info));
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function subscribe(_x, _x2, _x3, _x4) {
          return _subscribe.apply(this, arguments);
        }
        return subscribe;
      }()
    }
  }
};
exports["default"] = _default;