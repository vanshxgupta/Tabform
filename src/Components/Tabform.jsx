import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";
import { useState } from "react";

const Tabform = () => {
  const [data, setdata] = useState({
    name: "Vansh Gupta",
    age: "20",
    email: "vanshaff2@gmail.com",
    interests: ["coding", "chess", "cricket"],
    theme: "dark",
  });

  const [errors, seterror] = useState({});

  const [activeTab, setactiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "Name is not valid";
        }
        if (!data.age) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 3) {
          err.email = "Email is not valid";
        }

        seterror(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};

        if (data.interests.length < 1) {
          err.interests = "Select at least one interest";
        }

        seterror(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const Activetabcomponent = tabs[activeTab].component;

  const handlenextclick = () => {
    if (tabs[activeTab].validate()) {
      setactiveTab((prevstate) => prevstate + 1);
    }
  };
  const handleprevclick = () => {
    if (tabs[activeTab].validate()) setactiveTab((prevstate) => prevstate - 1);
  };

  const handlesubmit = () => {
    //make api call
    console.log(data);
  };

  return (
    <div>
      <div className="tab-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="tabsheading"
            onClick={() => tabs[activeTab].validate() && setactiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <Activetabcomponent data={data} setdata={setdata} errors={errors} />
      </div>

      <div className="btns">
        <div className="submit" onClick={handlesubmit}>
          {activeTab === tabs.length - 1 && <button>Submit</button>}
        </div>
        <div className="prevbtn" onClick={handleprevclick}>
          {activeTab > 0 && <button>Prev</button>}
        </div>
        <div className="nextbtn" onClick={handlenextclick}>
          {activeTab < tabs.length - 1 && <button>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default Tabform;
