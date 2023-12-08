import express from 'express';
import rootRoute from './routes/rootRoutes.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.listen(8080);
app.use(rootRoute);
