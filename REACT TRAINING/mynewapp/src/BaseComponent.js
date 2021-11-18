import React, { Component } from 'react';
let BaseComponent = (ModifiedComponent) => class extends Component{
    render() {
        return (
            <div>
                <h3>This content is from BaseComponent</h3>
                <ModifiedComponent/>
            </div>
        )
    }
}
const Button = () => {
    return (
        <button> This is from Button</button>
    )
}
let NewButton = BaseComponent(Button);
const Label = () => {
    return (
        <label>This is from Label</label>
    )
}
let NewLabel = BaseComponent(Label);
class Container1 extends Component{
    render() {
        return (
            <div>
            <NewButton />
            <NewLabel/>
        </div>
        )
        
    }
}
export default Container1;