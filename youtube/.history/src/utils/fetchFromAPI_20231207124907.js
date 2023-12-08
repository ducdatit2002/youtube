import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'token': localStorage.getItem("LOGIN_USER")
  },
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// khóa token => 401: token expired => API reset token => localstore: token => reload()  
export const getVideoAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`, options);

  return data.content;
};


export const getVideoTypeAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type`, options);
  return data.content;
}

export const getVideoByTypeAPI = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-by-type/${typeId}`, options);
  return data.content;
}



// khóa token => 401
export const getVideoId = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-id/${videoId}`, options);

  return data.content;
};



export const getCommentVideoId = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-comment-video/${videoId}`, options);

  return data.content;
};


export const signUpAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/auth/signup`, model, options);

  return data;
};

export const loginAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/auth/login`, model, options);

  return data;
};

export const loginFacebookAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/auth/login-facebook`, model, options);

  return data;
};

export const commentAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/video/comment-video`, model, options);

  return data;
};



// khóa token => 401: token expired => API reset token => localstore: token => reload()  
export const getVideoPageAPI = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-page/${page}`, options);

  return data.content; // { data, totalPage}
};





export const getInfo = async () => {
  const { data } = await axios.get(`${BASE_URL}/user/get-info`, options);

  return data.content;
};

export const updateInfo = async (model) => {
  const { data } = await axios.put(`${BASE_URL}/user/update-info`, model, options);

  return data.message;
};










// interceptor => middleware khi nhận response từ BE về
axios.interceptors.response.use(response => response, error => {
  console.log(error.response.data)
  if (error.response.data == "TokenExpiredError") {
    // call API refresh
    axios.post(`${BASE_URL}/auth/token-ref`, "", options).then(result => {

      console.log(result.data.content)
      localStorage.setItem("LOGIN_USER", result.data.content)

      window.location.reload();

    }).catch(error => {
      // logout => API Logout

      // xóa localstore
      localStorage.removeItem("LOGIN_USER")
    });
  }
})