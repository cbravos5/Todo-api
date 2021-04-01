import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import '../typeorm';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import AppError from '../errors/AppError';

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

app.use(errorHandler);

app.listen('3313', () => console.log('Server started on port 3313'));
