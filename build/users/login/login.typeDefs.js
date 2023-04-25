"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _apolloServer = require("apollo-server");
var _templateObject;
var typeDefs = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type loginResult {\n    ok: Boolean!\n    token: String\n    error: String\n  }\n  type Mutation {\n    login(username: String!, password: String!): loginResult\n  }\n"])));
var _default = typeDefs;
exports["default"] = _default;