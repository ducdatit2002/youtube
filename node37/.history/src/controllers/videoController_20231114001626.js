const getVideo = (req, res) => {
    try {
s.status(200).send("abc");
        // ORM: sequelize, prisma
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }
}
const createVideo = (req, res) => {
    res.send("create video")
}
export {
    getVideo,
    createVideo
}