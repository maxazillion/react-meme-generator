import PropTypes from "prop-types";
import { useState } from "react";
import Input from "./Input";

const Form = ({ submitHandler }) => {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");

  return (
    <form>
      {[{ label: "Top Text" }, { label: "Bottom Text" }].map((input, index) => (
        <Input key={index} label={input.label} />
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
