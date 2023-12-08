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
const getVideo = (req, res) => {
    res.send("create video")
}
export {
    getVideo,
    createVideo
}

