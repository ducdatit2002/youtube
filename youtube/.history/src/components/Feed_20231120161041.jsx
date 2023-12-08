import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from "./";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoAPI, getVideoByTypeAPI, getVideoPageAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [totalPage, setTotalPage] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {

    if (params.id) {
      getVideoByTypeAPI(params.id).then(result => {

        setVideos(result)

      }).catch(error => {

      });
    } else {
      // getVideoAPI().then(result => {

      //   setVideos(result)

      // }).catch(error => {

      // });
      getVideoPageAPI(1).then(result => {
        // { data, totalPage}
        setVideos(result.data);
        setTotalPage(result.totalPage);
      }).catch()
    }
  }, [params.id]);

  useEffect(() => {
    getVideoPageAPI(params.page).then(result => {
      // { data, totalPage}
      setVideos(result.data);
      setTotalPage(result.totalPage);
    }).catch()
  }, [params.page])


  let listPage = [];
  for (let index = 1; index <= totalPage; index++) {
    listPage.push(index);

  }

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2050 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />

        {
          listPage.map(page =>
            <button
              onClick={() => {
                navigate(`/${page}`);
              }}
              className="btn btn-sm btn-primary mx-2">{page}</button>
          )
        }

      </Box>
    </Stack>
  );
};

export default Feed;
