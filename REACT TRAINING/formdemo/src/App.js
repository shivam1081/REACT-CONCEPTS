import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            customerName: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ customerName: event.target.value });
    }
    handleSubmit(event) {
        alert("Customer Name is: " + this.state.customerName);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <br />
                <br />
            <form onSubmit={this.handleSubmit}>Enter Customer Name:<input type="text" value={this.state.customerName} onChange={this.handleChange} />
              <input type="submit" value="Submit"/>
            </form>
            </div>
        );
    }
}

export default App;
