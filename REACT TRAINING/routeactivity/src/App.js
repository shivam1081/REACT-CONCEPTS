import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
      <div className="App"
      style={{
        textAlign: "center",
        width: "100%",
        color: "blue",
        backgroundColor: "lightgreen",
    }}>
            <ul>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/category">Category</Link>
                </li>
            </ul>
        </div>
    );
}

export default App;
