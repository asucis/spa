import React, { Component } from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
