"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _apolloServer = require("apollo-server");
var _templateObject;
var typeDefs = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type User {\n    id: Int!\n    firstName: String!\n    lastName: String!\n    username: String!\n    email: String!\n    password: String!\n    bio: String\n    avatar: String\n    followers: [User]\n    following: [User]\n    createdAt: String!\n    updatedAt: String!\n    totalFollowing: Int!\n    totalFollowers: Int!\n    isMe: Boolean!\n    isFollowing: Boolean!\n    photos: [Photo]\n  }\n"])));
var _default = typeDefs;
exports["default"] = _default;