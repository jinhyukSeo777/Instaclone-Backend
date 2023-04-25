"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = exports["default"] = void 0;
var _schema = require("@graphql-tools/schema");
var _loadFiles = require("@graphql-tools/load-files");
var _merge = require("@graphql-tools/merge");
// schema.js

// typeDefs, resolver 파일 합칠때 사용

// 조건 만족하는 파일 불러올때 사용

// typeDefs는 typeDefs끼리, resolvers는 resolvers끼리 합칠때 사용

/*
  loadFilesSync로, 현재폴더(__dirname)에 있는, 모든폴더(**) 속,
  typeDefs.js로 끝나는 모든파일(*) 불러오기
*/
var loadedTypes = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.js"));

/*
  loadFilesSync로, 현재폴더(__dirname)에 있는, 모든폴더(**) 속,
  queries.js와 mutations.js로 끝나는 모든파일(*) 불러오기
*/
var loadedResolvers = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.js"));

// 불러온 typeDefs 합치기
var typeDefs = (0, _merge.mergeTypeDefs)(loadedTypes);

// 불러온 Queries, Mutations 합치기
exports.typeDefs = typeDefs;
var resolvers = (0, _merge.mergeResolvers)(loadedResolvers);

// 합쳐진 typeDefs, resolvers로 Schema 만들기
exports.resolvers = resolvers;
var schema = (0, _schema.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

// export defult로 최종 Schema 내보내기
var _default = schema;
exports["default"] = _default;