import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabform from "./Components/Tabform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tabform />
    </>
  );
}

export default App;
