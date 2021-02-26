import ky from "ky";

const api = {
  index(endpoint = "https://api.imgflip.com/get_memes") {
    return ky.get(endpoint).json();
  },
};

export default api;
