import { Component } from "react";

class Shivam extends Component {
    constructor() {
        super();
        this.state = {
            noofemps: 2000,
            num2: 3000
        };
    }
    modifyState() {
        if (this.state.noofemps < 10000) {
            // set state is used for changing the value of the state data
            this.setState({
                noofemps: this.state.noofemps + 3000
                // It is the change of state in the form of json object
            });
        } else {
            alert("Value exceeded");
        }
    }

    modifyState2() {
        this.setState({
            noofemps: this.state.noofemps - 1000,
            num2:this.state.num2+10
        });
    }
    render() {
        return (
            <div>
                <h1>Hello Component {this.props.name}</h1>
                <h2>Hello to this {this.props.name2}</h2>
                <h1>No of Employees {this.state.noofemps}</h1>
                <h1>Nums {this.state.num2}</h1>
                {/* this.state.noofemps is udes to access the data state data */}
                <button onClick={() => this.modifyState()}>
                    Click to Increase
                </button>
                <button onClick={() => this.modifyState2()}>
                    Click to Decrease
                </button>
                {/* Here we are assigning the button to change the state. */}
            </div>
        );
    }
}

export default Shivam; // it is required to export than only it can be used elsewhere
