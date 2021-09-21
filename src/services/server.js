import express from 'express';
import apiRouter from '../routes/index'
import path from 'path';
import * as http from 'http';
import { ErrorRequestHandler } from 'express';
const app = express();


const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));
app.use(express.json());
const server = new http.Server(app);

app.use('/api',apiRouter);

// const errorHandler = (err, req, res, next) => {
//     console.log(`HUBO UN ERROR ${err}`);
//     res.status(500).json({
//       err: err.message,
//     });
//   };
//   app.use(errorHandler);
export default server;