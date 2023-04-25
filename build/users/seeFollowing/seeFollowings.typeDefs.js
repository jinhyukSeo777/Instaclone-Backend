"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _apolloServer = require("apollo-server");
var _templateObject;
var typeDefs = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type SeeFollowingResult {\n    ok: Boolean!\n    error: String\n    following: [User]\n  }\n  type Query {\n    seeFollowings(username: String!, cursor: Int): SeeFollowingResult!\n  }\n"])));
var _default = typeDefs;
exports["default"] = _default;