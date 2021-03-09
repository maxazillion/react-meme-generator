import PropTypes from "prop-types";
import Input from "./Input";

const Form = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      {[{ label: "Top Text" }, { label: "Bottom Text" }].map((input, index) => (
        <Input key={index} label={input.label} />
      ))}
      <button className="p-4 bg-black rounded text-white">Submit</button>
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
