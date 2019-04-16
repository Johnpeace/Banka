import express from 'express';
import logger from 'morgan';
import Debug from 'debug';
import dotenv from 'dotenv';
import userRoute from './server/routes/user.route';

// parse .env content and assign it to process.env
dotenv.config();

// calling an instance of express
const app = express();

// logging all request to console using morgan
app.use(logger('dev'));
const debug = Debug('http');
const port = process.env.PORT;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1', (req, res) => res.status(201)
  .send({ message: 'Welcome to Banka API' }));

// API Versioning
app.use('/api/v1/', userRoute);

app.listen(port, () => debug(`Server listening on port ${port}`));

export default app;
