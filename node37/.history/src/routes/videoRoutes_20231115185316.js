import express from 'express';
import { getVideo, createVideo, getVideoId } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id", getVideoId)

//API get video <dl class="row">
    <dt class="col-sm-3"></dt>
    <dd class="col-sm-9"></dd>
    <dt class="col-sm-3"></dt>
    <dd class="col-sm-9"></dd>
    <dd class="col-sm-9 offset-sm-3"></dd>
    <dt class="col-sm-3 text-truncate"></dt>
    <dd class="col-sm-9"></dd>
    <dt class="col-sm-3"></dt>
    <dd class="col-sm-9">
        <dl class="row">
            <dt class="col-sm-4">Nested title</dt>
            <dd class="col-sm-8">Nested definition</dd>
        </dl>
    </dd>
</dl>
export default videoRoute;