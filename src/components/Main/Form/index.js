import { useState } from "react";

const Form = () => {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");

  function handleChange(event) {
    event.target.name === "Top"
      ? setTop(event.target.value)
      : setBottom(event.target.value);
    console.log(top, bottom);
  }

  return (
    <form>
      <div className="flex flex-col">
        <label>
          Top:
          <input type="text" name="Top" onKeyUp={handleChange} />
        </label>
        <label>
          Bottom:
          <input type="text" name="Bottom" onKeyUp={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
