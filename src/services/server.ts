import express from 'express';
import apiRouter from '../routes/index'
import path from 'path';
import * as http from 'http';

const app = express();

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));
app.use(express.json());
const server = new http.Server(app);

app.use('/api',apiRouter);

export default server;