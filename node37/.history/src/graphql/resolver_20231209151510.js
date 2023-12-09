
let resolver = {

    getVideo: async () => {
        let data = await prisma.video.findMany({
            include: {
                users: true,
                video_type: true
            }
        });
        return data;
    },

    getUser: () => {
        let data = {
            id: 1,
            userName: "abc",
            age: 2,
            email: "abc@gmail.com",
            product: [{
                productId: 1,
                productName: "sp 1"
            }]
        }
        return data
    },
    getUserId: ({ userId }) => {
        let data = {
            id: userId,
            userName: "abc",
            age: 2,
            email: "abc@gmail.com",
            product: [{
                productId: 1,
                productName: "sp 1"
            }]
        }
        return data
    },

    createUser: () => { }
};