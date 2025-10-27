import express from 'express';
import { products } from '#data';

const app = express();

const port = 3000;

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  //   console.log(id);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
