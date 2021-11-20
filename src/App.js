import React from "react";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProfileCard from "./components/Card/ProfileCard";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AddNew from "./components/Forms/AddNew";
function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="">
      <Router>
        <NavBar />
        {token && (
          <>
            <Switch>
              <Route path="/add" component={AddNew} />
            </Switch>
          </>
        )}
        {!token && <Redirect from="/add" to="/login" />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile" component={ProfileCard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
