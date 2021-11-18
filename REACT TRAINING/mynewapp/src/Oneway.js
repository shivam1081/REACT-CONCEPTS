//Demo


import { Component } from "react";

class Oneway extends Component{
    constructor() {
        super();
        this.state = {
            cname:'Ajay'
        }
    }
    render() {
        return (<div>
            <p>Customer Name: {this.state.cname}</p>
        </div>)
    }
}
export default Oneway;