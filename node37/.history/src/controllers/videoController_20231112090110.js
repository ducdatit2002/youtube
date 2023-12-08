export const getVideo = (req, res) => {
    try {
        //  bất đồng bộ => then catch, async await

        connect.query("SELECT * FROM video", (err, result) => {

            res.status(200).send(result);

        });

        if(true){
            res.status(400).send("Login thất bại");
            return;
        }

        res.status(200).send("abc");

        // ORM: sequelize, prisma
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }

}

export {
    getVideo
}