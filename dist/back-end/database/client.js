"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _client = require("@prisma/client");

const client = new _client.PrismaClient();
exports.client = client;