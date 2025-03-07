const Profile = ({ data, setdata, errors }) => {
  const { name, age, email } = data;

  const handledataChange = (e, item) => {
    setdata((prevstate) => ({
      ...prevstate,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handledataChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handledataChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handledataChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
