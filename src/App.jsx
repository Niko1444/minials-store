import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Header/Header.scss";
import "./components/SectionOne/SectionOne.scss";
import "./components/NavigationBar/NavigationBar.scss";

import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <SectionOne />
      <NavigationBar />
    </div>
  );
}

export default App;
