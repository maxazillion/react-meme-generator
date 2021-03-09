import { TextContext } from "context";
import PropTypes from "prop-types";
import { useContext } from "react";
const Figure = ({ imgSrc }) => {
  const { topText: top, bottomText: bottom } = useContext(TextContext);
  return (
    <figure>
      <p className="bg-black text-white p-2 rounded text-center text-5xl">
        {top}
      </p>
      <img className="max-h-30" src={imgSrc} alt="random meme" />
      <p className="bg-black text-white p-2 text-center text-5xl">{bottom}</p>
    </figure>
  );
};

Figure.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
export default Figure;
