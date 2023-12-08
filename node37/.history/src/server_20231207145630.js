import express from 'express';
import cors from 'cors';
import rootRoute from './routes/rootRoutes.js';

const app = express();
app.use(express.json())
app.use(cors());
app.listen(8080);
// localhost:8080/video/get-video
app.use(rootRoute);


// yarn add sequelize
// lưu ý cài thêm thư viện của CSDL đó song song với sequelize

// yarn add  swagger-ui-express swagger-jsdoc
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    definition: {
        info: {
            title: "api node 37",
            version: "1.0.0.0.0.0.0.0.0.0"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

