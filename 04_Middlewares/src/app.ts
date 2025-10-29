import express from 'express';
import { articleRoutes, postRoutes, userRoutes } from '#routes';
import { errorHandler, maintenanceMode, timeLogger } from '#middlewares';
import { methodLogger } from '#middlewares';

const app = express();
const port = 3000;

// Built-in Middlewares
app.use(express.json());

// app.use(timeLogger);
// app.use(methodLogger);

// ROUTES
app.use('/users', timeLogger, methodLogger, userRoutes);
app.use('/posts', maintenanceMode, postRoutes);
app.use('/articles', articleRoutes);

// Error-Handler
app.use(errorHandler);

app.listen(port, () =>
  console.log(`\x1b[31mMain app listening at http://localhost:${port}\x1b[0m`)
);
