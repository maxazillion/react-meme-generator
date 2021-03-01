import { toKebabCase } from "lib";
import PropTypes from "prop-types";

const Input = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={toKebabCase(label)}>
        {label}:
        <input
          type="text"
          name="Top"
          className="border-2 m-1 ml-0"
          placeholder={label}
          id={toKebabCase(label)}
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
