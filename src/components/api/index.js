//https://api.imgflip.com/get_memes
const api = {
  async index(endpoint = "https://api.imgflip.com/get_memes") {
    const res = await fetch(endpoint);
    return res.json();
  },
};

export default api;
