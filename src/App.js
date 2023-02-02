import "./App.css";

import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  // console.log(emojis);
  return (
    <div className="App">
      <div className="container">
        <Search search={search} handleSearchChange={handleSearchChange} />
        <Line search={search} />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
