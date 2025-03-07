const Interests = ({ data, setdata, errors }) => {
  const { interests } = data;

  const handledatachange = (e, name) => {
    setdata((prevstate) => ({
      ...prevstate,
      interests: e.target.checked
        ? [...prevstate.interests, e.target.name]
        : prevstate.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handledatachange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={interests.includes("cricket")}
            onChange={handledatachange}
          />
          Cricket
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="insta"
            checked={interests.includes("insta")}
            onChange={handledatachange}
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
            onChange={handledatachange}
          />
          Chess
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
