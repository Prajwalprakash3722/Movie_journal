import React from "react";
import Card from "./components/Card/Card";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="">
      <Router>
        <NavBar />
        {/* <Route exact path="/" component={Home} /> */}
        {token ? (
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        ) : (
          <div>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </div>
        )}
        {/* <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} /> */}
      </Router>
    </div>
  );
}

export default App;
