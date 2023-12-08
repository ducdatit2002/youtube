// package.json => yarn init => enter x 3.14

// yarn add express

//import framework express
import express from 'express';
const app = express();
//chèn middleware
app.use(express.json());

import cors from 'cors';
app.use(cors({
    origin: "*"
}));
app.listen(8080);




import rootRoute from './routes/rootRoutes.js';
app.use(rootRoute);
