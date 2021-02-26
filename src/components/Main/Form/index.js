const Form = () => {
  return (
    <form>
      <div className="flex flex-col">
        <label>
          Top:
          <input type="text" top="Top" />
        </label>
        <label>
          Bottom:
          <input type="text" top="Bottom" />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
