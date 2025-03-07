const Settings = ({ data, setdata, errors }) => {
  const { theme } = data;

  const handledatachange = (e) => {
    setdata((prevstate) => ({
      ...prevstate,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme == "dark"}
            onChange={handledatachange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme == "light"}
            onChange={handledatachange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
