import NavigationBar from "./NavigationBar";
import { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    width: "100%",
                    color: "blue",
                    backgroundColor: "lightgreen",
                }}
            >
                <h1>Welcome to Child Routing Example</h1>
            <NavigationBar/>
            </div>
        );
    }
}

export default App;
