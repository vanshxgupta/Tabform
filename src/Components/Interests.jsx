const Interests = ({ data, setdata, errors }) => {
  const { interests } = data;

  const handledatachange = (e) => {
    setdata((prevstate) => ({
      ...prevstate,
      interests: e.target.checked
        ? [...prevstate.interests, e.target.name]
        : prevstate.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div className="interests-container">
      <h3 className="interests-heading">Select Your Interests</h3>
      <div className="checkbox-group">
        {["coding", "cricket", "insta", "chess"].map((interest) => (
          <label key={interest} className="checkbox-label">
            <input
              type="checkbox"
              name={interest}
              checked={interests.includes(interest)}
              onChange={handledatachange}
              className="checkbox-input"
            />
            {interest.charAt(0).toUpperCase() + interest.slice(1)}
          </label>
        ))}
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
