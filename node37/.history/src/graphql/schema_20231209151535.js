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

