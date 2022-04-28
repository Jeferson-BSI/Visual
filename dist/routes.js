"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _path = require("path");

var _client = require("./back-end/database/client");

const router = (0, _express.Router)();
exports.router = router;
router.get('/visual', (req, res) => {
  const i = (0, _path.join)(__dirname, 'front-end', 'index.html');
  return res.sendFile(i);
});
router.get('/visual/schedules', (req, res) => {
  const i = (0, _path.join)(__dirname, 'front-end', 'pages', 'schedule.html');
  return res.sendFile(i);
});
router.get('/visual/about', (req, res) => {
  const i = (0, _path.join)(__dirname, 'front-end', 'pages', 'about.html');
  return res.sendFile(i);
});
router.post('/schedules', async (req, res) => {
  const {
    name,
    date,
    time,
    type
  } = req.body;
  const dados = await _client.client.schedules.create({
    data: {
      name,
      date,
      time,
      type
    }
  });
  return res.status(200).json(dados);
});
router.get('/schedules', async (req, res) => {
  const {
    date
  } = req.query;

  if (!date) {
    const data = await _client.client.schedules.findMany();
    return res.status(200).json(data);
  }

  const data = await _client.client.schedules.findMany({
    where: {
      date: `${date}`
    }
  });
  return res.status(200).json(data);
});