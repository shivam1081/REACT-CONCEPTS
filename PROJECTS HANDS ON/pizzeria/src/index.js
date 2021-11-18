import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderPizza from "./OrderPizza"
import BuildYourPizza from'./BuildYourPizza'
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";

ReactDOM.render(
  <Router>
    <NavigationBar/>
    <Route path="/" component={HomePage} exact></Route>
    <Route path="/HomePage" component={HomePage}></Route>
        <Route path="/OrderPizza" component={OrderPizza}></Route>
        <Route path="/BuildYourPizza" component={BuildYourPizza}></Route>
    </Router>,

    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
