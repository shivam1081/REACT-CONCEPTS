import { Component } from "react";

class Activity2 extends Component {
    constructor() {
        super();
        this.state = {
            principal: 1,
            time: 1,
            rate: 1,
            si: 1,
        };
    }
    handleprincipal(e) {
        this.setState({
            principal: e.target.value,
        });
    }
    handletime(e) {
        this.setState({
            time: e.target.value,
        });
    }
    handlerate(e) {
        this.setState({
            rate: e.target.value,
        });
    }

    render() {
        return (
            <div style={{ padding: "10" }}>
                <p>Enter the Principal: </p>
                <input
                    type="text"
                    value={this.state.principal}
                    onChange={(e) => this.handleprincipal(e)}
                />
                <p>Enter the Time: </p>
                <input
                    type="text"
                    value={this.state.time}
                    onChange={(e) => this.handletime(e)}
                />
                <p>Enter the Rate: </p>
                <input
                    type="text"
                    value={this.state.rate}
                    onChange={(e) => this.handlerate(e)}
                />
                <p>
                    Simple Interest:
                    {(this.state.principal *
                        this.state.time *
                        this.state.rate) /
                        100}
                </p>
            </div>
        );
    }
}
export default Activity2;
