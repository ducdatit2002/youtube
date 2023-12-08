const getVideo = (req, res) => {
    try {
        res.status(200).send("get video");
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }
}
const createVideo = (req, res) => {
    res.send("create video")
}
const getVideoId = (req, res) => {
    res.send("get video by id")
}
export {
    getVideo,
    createVideo,
    getVideoId,
}

