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
var resolvers = {
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var firstName, lastName, username, email, password, isExist, hashedPassword;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              firstName = _ref.firstName, lastName = _ref.lastName, username = _ref.username, email = _ref.email, password = _ref.password;
              _context.next = 3;
              return _client["default"].user.findFirst({
                where: {
                  OR: [{
                    username: username
                  }, {
                    email: email
                  }]
                }
              });
            case 3:
              isExist = _context.sent;
              if (!isExist) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", {
                ok: false,
                error: "already exists"
              });
            case 6:
              _context.next = 8;
              return _bcrypt["default"].hash(password, 10);
            case 8:
              hashedPassword = _context.sent;
              _context.next = 11;
              return _client["default"].user.create({
                data: {
                  firstName: firstName,
                  lastName: lastName,
                  username: username,
                  email: email,
                  password: hashedPassword
                }
              });
            case 11:
              return _context.abrupt("return", {
                ok: true
              });
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }
      return createAccount;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;