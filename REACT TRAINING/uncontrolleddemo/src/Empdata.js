import React, { Component } from "react";
class Empdata extends Component {
    handleSubmit(event) {
        alert(
            "Customer Name: " +
                this.refs.cname.value +
                "and" +
                "Customer email is: " +
                this.refs.cemail.value
        );
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={() => this.handleSubmit()}>
                    Enter Customer Name:
                    <input type="text" ref="cname" />
                    <br />
                    <br />
                    Enter Customer Email:
                    <input type="email" ref="cemail" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Empdata;
