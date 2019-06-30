import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="wrapper">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
