import express, { json } from 'express';
import { router } from './routes';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// @ts-ignorets-i
// const filePath = fileURLToPath(import.meta.url);
// const pathName = dirname(filePath);

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, 'front-end')));

app.set('views', join(__dirname, 'front-end'));
// app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(router);

// app.listen(3333);

app.listen(process.env.PORT || 3333);
