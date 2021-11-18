import { Component } from "react";

class Activity1 extends Component {
    constructor() {
        super();
        this.state = {
            pTitle: "No Selection",
        };
    }
    handleChange(e) {
        this.setState({ pTitle: e.target.value });
    }
    render() {
        return (
            <div style={{ padding: "10" }}>
                <p>Select Country 
                <select  onChange={(e) => this.handleChange(e)} id="country">
                    <option value="India">Volvo</option>
                    <option value="America">America</option>
                    <option value="Germany">Germany</option>
                </select>
               
            Entered Text: { this.state.pTitle}</p>
            </div>
        );
    }
}
export default Activity1;