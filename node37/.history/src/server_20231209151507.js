import express from 'express';
import cors from 'cors';
import rootRoute from './routes/rootRoutes.js';

const app = express();
app.use(express.json())
app.use(cors());

//middleware định vị thư mục load tài nguyên
app.use(express.static("."));

// graphql
import { graphqlHTTP } from 'express-graphql';

import { buildSchema } from 'graphql';
// [{productId, productName}, {productId, productName} ,{productId, productName}]
// ["xyc","abc"]
// [2,5,6,2]
let schemaGraphql = buildSchema(`
type Product {
    productId: ID
    productName: String
}

    type User {
        user_id: ID
        full_name: String
        email: String
        avatar: String
        pass_word: String
        face_app_id: String
        role: String
        refresh_token: String

    }
    
    type VideoType {
        type_id: ID
        type_name: String
        icon: String
    }

    type Video{
        video_id:     ID             
        video_name:    String       
        thumbnail:    String         
        description:  String        
        views:        Int
        source:       String         
        user_id:      Int
        type_id:      Int
        users: User
        video_type: VideoType
    }

    type RootQuery{
        getUser: User
        getUserId( userId: Int ): User
        getVideo: [Video]
    }

    type RootMutation {
        createUser: String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }


`);



// localhost:8080/api
app.use("/api", graphqlHTTP({
    schema: schemaGraphql,    // nơi khai báo đối tượng (tên model, tên hàm)
    rootValue: resolver, // gán dữ liệu vào các hàm được khai báo ở schema
    graphiql: true
}))







// end graphql
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

// setup prisma
// 1/ yarn add prisma @prisma/client
// 2/ yarn prisma init

// Next steps:
// 3. Cập nhật lại chuỗi kết nối database trong .env và tên hệ CSDL đang sử dụng trong schema.prisma
// 4. Run yarn prisma db pull 
// 5. Run yarn prisma generate để cập nhật model trong @prisma/client
