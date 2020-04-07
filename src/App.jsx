import React from "react";
import "./App.css";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <Card printOnScreen="hello World" />
      <Searchbar />
    </>
  );
}

export default App;
