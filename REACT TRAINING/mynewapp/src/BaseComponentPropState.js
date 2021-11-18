import React, { Component } from "react";
let BaseCompnentPropState = (ModifiedComponent) =>
    class extends Component {
        constructor() {
            super();
            this.state = {
                count: 0,
            };
        }
        increementCount() {
            this.setState({
                count: this.state.count + 1,
            });
        }
        render() {
            return (
                <div>
                    <h3>This content id from BaseComponent</h3>
                    <ModifiedComponent
                        count={this.state.count}
                        increement={() => this.increementCount()}
                    />
                </div>
            );
        }
    }
const Button = (props) => {
    console.log(props)
    return <button onClick={props.increement}>Count:{props.count}</button>;
};
let NewButton = BaseCompnentPropState(Button);
class ContainerPropState extends Component {
    render() {
        return (
            <div>
                <NewButton />
            </div>
        );
    }
}
export default ContainerPropState;
