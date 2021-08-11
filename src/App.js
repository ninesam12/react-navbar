import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
