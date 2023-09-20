import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Header/Header.scss";
import "./components/SectionOne/SectionOne.scss";

import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <SectionOne />
    </div>
  );
}

export default App;
