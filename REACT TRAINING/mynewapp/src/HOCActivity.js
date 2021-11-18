import React, { Component } from "react";
import Container from "./BaseCompone";
let BaseCompnentPropState = (ModifiedComponent) =>
    class extends Component {
        constructor() {
            super();
            this.state = {
                pass:"12345",
                needpassword:"yes"
            };
        }
        receivePassword() {
            if (this.state.needpassword == 'yes') {
                let password1=this.state.pass
            alert(password1+"I got the password")
            }
            else {
                alert("I have not got the password");
            }
        }

       

        render() {
            return (
                <div>
                    <ModifiedComponent
                        Password={this.state.pass}
                        condition={()=>this.receivePassword()}
                    />
                </div>
            );
        }
        
}

const Button1 = (props) => {
    return (
            <button onClick={props.receivePassword}>Click Me</button>
        )
    }

export default Container;
    


