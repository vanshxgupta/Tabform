const Interests = ({ data, setdata }) => {
  const { interests } = data;

  const handledatachange = (e,name) => {
    setdata((prevstate) => ({
      ...prevstate,
      interests:
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="insta"
            checked={interests.includes("insta")}
          />
          Insta
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="chess"
            checked={interests.includes("chess")}
          />
          Chess
        </label>
      </div>
    </div>
  );
};

export default Interests;
