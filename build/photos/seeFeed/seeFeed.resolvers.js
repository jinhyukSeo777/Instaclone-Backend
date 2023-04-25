"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(require("../../client"));
var _users = require("../../users/users.utils");
var _default = {
  Query: {
    seeFeed: (0, _users.protectedResolver)(function (_, _ref, _ref2) {
      var offset = _ref.offset;
      var loggedInUser = _ref2.loggedInUser;
      if (offset == undefined) {
        return _client["default"].photo.findMany({
          where: {
            OR: [{
              user: {
                followers: {
                  some: {
                    id: loggedInUser.id
                  }
                }
              }
            }, {
              userId: loggedInUser.id
            }]
          },
          orderBy: {
            createdAt: "desc"
          }
        });
      } else {
        return _client["default"].photo.findMany({
          where: {
            OR: [{
              user: {
                followers: {
                  some: {
                    id: loggedInUser.id
                  }
                }
              }
            }, {
              userId: loggedInUser.id
            }]
          },
          orderBy: {
            createdAt: "desc"
          },
          take: 2,
          skip: offset
        });
      }
    })
  }
};
exports["default"] = _default;