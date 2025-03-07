const Profile = ({ data, setdata, errors }) => {
  const { name, age, email } = data;

  const handledataChange = (e, item) => {
    setdata((prevstate) => ({
      ...prevstate,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="profile-container">
      <h3 className="profile-heading">Profile Information</h3>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handledataChange(e, "name")}
          className="input-field"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="input-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handledataChange(e, "age")}
          className="input-field"
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handledataChange(e, "email")}
          className="input-field"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
