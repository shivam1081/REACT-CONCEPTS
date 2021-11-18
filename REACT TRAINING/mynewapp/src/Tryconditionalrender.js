import { Component } from "react";

class Tryconditionalrender extends Component {
    render() {
        let val = 1;
        let mylayout = null;
        if (val == 1) {
            mylayout = (
                <div
                    style={{
                        color: "red",
                        backgroundColor: "lightgreen",
                        height: "50%",
                        width: "50%",
                    }}
                >
                    <h3>Layout 1</h3>
                </div>
            );
        }
        else {
            mylayout = (
                <div
                    style={{
                        color: "red",
                        backgroundColor: "yellow",
                        height: "50%",
                        width: "50%",
                    }}
                >
                    <h3>Layout 2</h3>
                </div>
            );
        }

        return (
            <div>
                <h3>Conditional Render</h3>
                {mylayout}
            </div>
        )
            
        
    }
}
export default Tryconditionalrender;