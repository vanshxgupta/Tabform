const Settings = ({ data, setdata, errors }) => {
  const { theme } = data;

  const handledatachange = (e) => {
    setdata((prevstate) => ({
      ...prevstate,
      theme: e.target.name,
    }));
  };

  return (
    <div className="settings-container">
      <h3 className="settings-heading">Choose Theme</h3>
      <div className="radio-group">
        <label className="radio-label">
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handledatachange}
            className="radio-input"
          />
          Dark
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handledatachange}
            className="radio-input"
          />
          Light
        </label>
      </div>
      {errors.theme && <span className="error">{errors.theme}</span>}
    </div>
  );
};

export default Settings;
