import express from 'express';
import { createVideo, getVideo, getVideoByType, getVideoId, getVideoType } from '../controllers/videoController.js';

const videoRoute = express.Router();

// nơi quản lý API của đối tượng
// API lấy tất cả video
videoRoute.get("/get-video", getVideo)

// API lấy video theo typeId
videoRoute.get("/get-video-by-type/:typeId",getVideoByType)

videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id",getVideoId)

// API get video type
// /video/get-video-type
videoRoute.get("/get-video-type",getVideoType)

//API get video theo <nav aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#"></a></li>
    <li class="page-item"><a class="page-link" href="#"></a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
export default videoRoute;