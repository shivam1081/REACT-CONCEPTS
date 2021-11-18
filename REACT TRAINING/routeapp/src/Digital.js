import { Link } from 'react-router-dom';
import { Component } from "react";

class Digital extends Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    width: "100%",
                    color: "blue",
                    height: "80%",
                }}
            >
                <h2>This is about page</h2>
                <ul style={{ 'listStyle': 'none', 'textAlign': 'center' }}>
                    <li><Link to="/About/Digital/UI path">UI Path</Link></li><br />
                    <li><Link to="/About/Digital/Bigdata">Bigdata</Link></li>
                    
                </ul>
                
            </div>
        );
    }
}
export default Digital;
