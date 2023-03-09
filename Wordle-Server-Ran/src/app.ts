import express from 'express';
import { json, urlencoded } from 'body-parser';
import { cors } from './middleware/cors.middleware';
import { errorHandler } from './middleware/error-handler.middleware';
import { NotFoundError } from './errors/not-found-error';
import { indexRoute } from './routes/index.route';
import { usersRoute } from './routes/users.route';

// Create a new Express.js app
const app = express();

// Set up middleware
app.use(cors);
app.use(json());
app.use(urlencoded({ extended: true }));

// Register routes
app.use('/', indexRoute);
app.use('/users', usersRoute);

// Handle 404 errors
app.use((req, res, next) => {
  next(new NotFoundError());
});

// Handle errors
app.use(errorHandler);

export default app;
