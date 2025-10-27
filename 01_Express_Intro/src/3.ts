import express from 'express';
import { products } from '#data';

const app = express();

const port = 3000;

app.all('/test', (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    res.json({ message: 'Get request on /test' });
  }

  if (method === 'POST') {
    res.status(201).json({ message: 'POST request on /test' });
  }

  res.status(405).json({ message: 'Method not allowed' });
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
