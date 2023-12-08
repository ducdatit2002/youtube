import express from 'express';
import rootRoute from './routes/rootRoutes.js';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors({
    origin: "*"
}));
app.listen(8080);

app.use(rootRoute);
