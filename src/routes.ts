import { Router, Request, Response } from 'express';
import { join } from 'path';
import { client } from './back-end/database/client';

const router = Router();

router.get('/visual', (req: Request, res: Response) => {
  const i = join(__dirname, 'front-end', 'index.html');

  return res.sendFile(i);
});

router.get('/visual/schedules', (req: Request, res: Response) => {
  const i = join(__dirname, 'front-end', 'pages', 'schedule.html');

  return res.sendFile(i);
});

router.get('/visual/about', (req: Request, res: Response) => {
  const i = join(__dirname, 'front-end', 'pages', 'about.html');

  return res.sendFile(i);
});

router.post('/schedules', async (req: Request, res: Response) => {
  const { name, date, time, type } = req.body;

  const dados = await client.schedules.create({
    data: { name, date, time, type },
  });

  return res.status(200).json(dados);
});

router.get('/schedules', async (req: Request, res: Response) => {
  const { date } = req.query;

  if (!date) {
    const data = await client.schedules.findMany();
    return res.status(200).json(data);
  }

  const data = await client.schedules.findMany({
    where: {
      date: `${date}`,
    },
  });

  return res.status(200).json(data);
});

router.delete('/schedules/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const schedule = await client.schedules.findUnique({ where: { id } });

  if (!schedule) {
    return res.status(400).json({ Message: 'No schedule found' });
  }
  await client.schedules.delete({ where: { id } });

  return res.status(200).json();
});
export { router };
