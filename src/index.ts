//let express = require('express');
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route';
import { db } from './lib/connectionDB';

dotenv.config();

const app : Express = express();
const port : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use('/user', userRouter);

app.get('/', (req : Request, res : Response) => {  
  res.send('Hello World');
});

app.get('/error', (req : Request, res : Response) => {
    res.status(500).send('Hello World');
});

app.get('/notfound', (req : Request, res : Response) => {
    res.status(404).send('Hello World');
});

db.then(() => app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}));
