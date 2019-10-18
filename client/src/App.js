import React from "react";
import Navbar from "./components/Navbar/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/index.js";
import SearchForm from "./components/SearchForm.js";
import Saved from "./components/Saved";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
