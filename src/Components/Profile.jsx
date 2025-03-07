const Profile = ({ data, setdata }) => {
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
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handledataChange(e, "age")}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handledataChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
