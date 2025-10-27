import express from 'express';

const app = express();

const port = 3000;

app.get('/posts', (req, res) => res.json({ message: 'GET all posts' }));
app.post('/posts', (req, res) => res.json({ message: 'POST a new post' }));
app.get('/posts/:id', (req, res) => res.json({ message: 'GET a post by id' }));
app.put('/posts/:id', (req, res) =>
  res.json({ message: 'UPDATE a post by id' })
);
app.delete('/posts/:id', (req, res) =>
  res.json({ message: 'DELETE a post by id' })
);

app.get('/users', (req, res) => res.json({ message: 'GET all users' }));
app.post('/users', (req, res) => res.json({ message: 'POST a new users' }));
app.get('/users/:id', (req, res) => res.json({ message: 'GET a user by id' }));
app.put('/users/:id', (req, res) => res.json({ message: 'UPDATE user by id' }));
app.delete('/users/:id', (req, res) =>
  res.json({ message: 'DELETE user by id' })
);

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
