import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Service from "./pages/Service";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services"  component={Service} />
        <Route path="/products"  component={Products} />
        <Route path="/contact"  component={ContactUs} />
        <Route path="/signup"  component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
