import express from 'express';

const app = express();

const port = 3000;

// Basis-Route
app.get('/', (req, res) => res.send('Hello'));
app.get('/something', (req, res) => res.send('this is another endpoint'));

app.get('/logger', (req, res) => {
  const { url, method } = req;
  //   console.log(req);

  //   res.send(`a ${method} request was made to ${url}`);
  res.json({
    message: `a ${method} request was made to ${url}`,
  });
});

app.get('/statuscode', (req, res) =>
  res.status(418).json({ message: 'check your Devtools' })
);

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
