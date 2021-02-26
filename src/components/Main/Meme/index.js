import api from "api";
import { getRandomInt } from "lib";
import { useQuery } from "react-query";

function renderRandomImage({ data: { memes } }) {
  return (
    <img src={memes[getRandomInt(0, memes.length - 1)].url} alt="random meme" />
  );
}

const Meme = () => {
  async function fetchMemeImages() {
    const memes = await api.index();
    return memes;
  }

  const { isSuccess, data } = useQuery("memes", fetchMemeImages);

  fetchMemeImages();

  return isSuccess ? renderRandomImage(data) : <p>..loading</p>;
};

export default Meme;
