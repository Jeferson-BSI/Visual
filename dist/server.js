"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignorets-i
// const filePath = fileURLToPath(import.meta.url);
// const pathName = dirname(filePath);
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.static((0, _path.join)(__dirname, 'front-end')));
app.set('views', (0, _path.join)(__dirname, 'front-end')); // app.engine('html', ejs.renderFile);

app.set('view engine', 'html');
app.use(_routes.router);
app.listen(3333); // app.listen(process.env.PORT || 3000);