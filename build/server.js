"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _apolloServerExpress = require("apollo-server-express");
var _schema = _interopRequireWildcard(require("./schema"));
var _users = require("./users/users.utils");
var _graphqlUploadExpress = _interopRequireDefault(require("graphql-upload/graphqlUploadExpress.js"));
var _subscriptionsTransportWs = require("subscriptions-transport-ws");
var _graphql = require("graphql");
var _http = require("http");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
require("dotenv").config();
var startServer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var server, app, httpServer, subscriptionServer;
    return _regenerator["default"].wrap(function _callee5$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          server = new _apolloServerExpress.ApolloServer({
            resolvers: _schema.resolvers,
            typeDefs: _schema.typeDefs,
            context: function () {
              var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
                var _context2;
                return _regenerator["default"].wrap(function _callee$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!ctx.req) {
                        _context3.next = 7;
                        break;
                      }
                      _context3.next = 3;
                      return (0, _users.getUser)(ctx.req.headers.token);
                    case 3:
                      _context3.t0 = _context3.sent;
                      return _context3.abrupt("return", {
                        loggedInUser: _context3.t0
                      });
                    case 7:
                      _context2 = ctx.connection.context;
                      return _context3.abrupt("return", {
                        loggedInUser: _context2.loggedInUser
                      });
                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee);
              }));
              function context(_x) {
                return _context.apply(this, arguments);
              }
              return context;
            }(),
            plugins: [{
              serverWillStart: function serverWillStart() {
                return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                  return _regenerator["default"].wrap(function _callee3$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", {
                          drainServer: function drainServer() {
                            return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                              return _regenerator["default"].wrap(function _callee2$(_context4) {
                                while (1) switch (_context4.prev = _context4.next) {
                                  case 0:
                                    subscriptionServer.close();
                                  case 1:
                                  case "end":
                                    return _context4.stop();
                                }
                              }, _callee2);
                            }))();
                          }
                        });
                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee3);
                }))();
              }
            }]
          });
          app = (0, _express["default"])();
          _context7.next = 4;
          return server.start();
        case 4:
          app.use("/static", _express["default"]["static"]("uploads"));
          app.use((0, _graphqlUploadExpress["default"])());
          server.applyMiddleware({
            app: app
          });
          httpServer = (0, _http.createServer)(app);
          subscriptionServer = _subscriptionsTransportWs.SubscriptionServer.create({
            schema: _schema["default"],
            execute: _graphql.execute,
            subscribe: _graphql.subscribe,
            onConnect: function () {
              var _onConnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref2) {
                var token, loggedInUser;
                return _regenerator["default"].wrap(function _callee4$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      token = _ref2.token;
                      if (!token) {
                        // disconnect
                      }
                      _context6.next = 4;
                      return (0, _users.getUser)(token);
                    case 4:
                      loggedInUser = _context6.sent;
                      return _context6.abrupt("return", {
                        loggedInUser: loggedInUser
                      });
                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee4);
              }));
              function onConnect(_x2) {
                return _onConnect.apply(this, arguments);
              }
              return onConnect;
            }()
          }, {
            server: httpServer,
            path: "/graphql"
          });
          httpServer.listen({
            port: 4000
          }, function () {
            console.log("\uD83D\uDE80 Server is running \u2705");
          });
          // httpServer.listen(process.env.PORT, () =>
          //   console.log(`🚀 Server is running ✅`)
          // );
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee5);
  }));
  return function startServer() {
    return _ref.apply(this, arguments);
  };
}();
startServer();