import express from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors({
    origin: "*"
}));
app.listen(8080);

import rootRoute from './routes/rootRoutes.js';
app.use(rootRoute);
