import React, { Component } from 'react';
let BaseCompnent = (ModifiedComponent) => class extends Component{
    constructor() {
        super();
        this.state = {
            pass:"12345",
            needpwd:"no"
        }

    }
    receivepwd() {
        if (this.state.needpwd === 'yes') {
            let password1 = this.state.pass;
            alert(password1 + " I got the Password");
        }
        else
        {
            alert("No password is provided");
            }
    }
    render() {
        return (
            <div>
                <ModifiedComponent Password={this.state.pass}
                    needpassword={() => this.receivepwd()}
                />
            </div>
        )
    }
    
    
}
const Button = (props) => {
    return (
        <div>
            <button onClick={props.needpassword}>Click Me</button>
            </div>
        )
}
let NewButton = BaseCompnent(Button);
class Container extends Component{
    render() {
        return (
            <div>
                <NewButton/>
            </div>
        )
    }
}
export default Container;