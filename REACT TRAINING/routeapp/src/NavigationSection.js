import { Link } from 'react-router-dom';
import { Component } from "react";

class NavigationSection extends Component{
    render() {
        return (
            <div>
                <div
                    style={{
                        textAlign: "center",
                        width: "100%",
                        color: "blue",
                        backgroundColor: "pink",
                        height: "60%",
                    }}
                >
                    <ul>
                        <Link to="/About/NewIT">NewIT</Link><span> | </span>
                        <Link to="/About/Digital">Digital</Link>
                    </ul>
                </div>
            </div>
        );
    }
}
export default NavigationSection;