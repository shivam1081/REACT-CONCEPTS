import { Link } from "react-router-dom";
const { Component } = require("react");

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        textAlign: "center",
                        width: "100%",
                        color: "green",
                        backgroundColor: "pink",
                        height: "60%",
                    }}
                >
                    <ul>
                        <Link to="/Home">Home</Link>
                        <span> | </span>
                        <Link to="/About">About</Link>
                    </ul>
                </div>
            </div>
        );
    }
}
export default NavigationBar;
