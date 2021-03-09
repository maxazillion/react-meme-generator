import api from "api";
import { getRandomInt } from "lib";
import { useQuery } from "react-query";
import Figure from "./Figure";

function renderRandomImage({ data: { memes } }) {
  return <Figure imgSrc={memes[getRandomInt(0, memes.length - 1)].url} />;
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
