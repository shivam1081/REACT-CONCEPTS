import { Component } from "react";

class Twoway extends Component {
    constructor() {
        super();
        this.state = {
            pTitle: "Mouse",
        };
    }
    handleChange(e) {
        this.setState({ pTitle: e.target.value });
    }
    render() {
        return (
            <div style={{ padding: "10" }}>
                <p>Two Way Binding</p>
                <br />
                <input
                    type="text"
                    value={this.state.pTitle}
                    onChange={(e) => this.handleChange(e)}
                />
                <p>Entered Text: { this.state.pTitle}</p>
            </div>
        );
    }
}
export default Twoway;
