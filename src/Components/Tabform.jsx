import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";
import { useState } from "react";

const Tabform = () => {
  //for data consistency , adding all the data at the centralised placed ,
  // and for using it we will pass the data as the prop

  const [data, setdata] = useState({
    name: "Vansh Gupta",
    age: "20",
    email:"vanshaff2@gmail.com",
    interests: ["coding", "chess", "cricket"],
    theme: "dark",
  });

  const [activeTab, setactiveTab] = useState(0);

  //config driven UI
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const Activetabcomponent = tabs[activeTab].component;

  return (
    <div>
      <div className="tab-container">
        {tabs.map(
          (
            t,
            index //add index to the map
          ) => (
            <div
              //always add the key in the map
              key={index}
              className="tabsheading"
              onClick={() => setactiveTab(index)} //add the callback ()=> , in the onclick
            >
              {t.name}
            </div>
          )
        )}
      </div>

      <div className="tab-body">
        <Activetabcomponent data={data} setdata={setdata}/>
      </div>
    </div>
  );
};

export default Tabform;
