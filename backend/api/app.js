//Import all express, mongoose and all the necessary files
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//Call the routes
routes(app);

export default app;