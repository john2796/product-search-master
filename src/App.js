import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Search Project</h1>
        <Card />
        <Navbar />
      </div>
    );
  }
}

export default App;
