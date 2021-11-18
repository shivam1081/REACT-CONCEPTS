import { Component } from "react";

class Listdemo extends Component {
    array1 = [1, 2, 3, 4, 4, 5];
    arrayitem = this.array1.map((a, id) => (
        <li key={id}>
            Key {id}-{a}
        </li>
    ));
    render() {
        return (
            <div>
                <h3>List Demo</h3>
                <ul>{this.array1}</ul>
                <h4>Display array using list</h4>
                <ul>{this.arrayitem}</ul>
            </div>
        );
    }
}
export default Listdemo;
