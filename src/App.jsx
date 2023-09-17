import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Header/Header.css";

import Header from "./components/Header";
// import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {/* <Carousel /> */}
    </div>
  );
}

export default App;
