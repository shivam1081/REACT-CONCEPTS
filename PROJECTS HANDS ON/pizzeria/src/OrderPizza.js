import { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import e from "express";

class OrderPizza extends Component {
    constructor() {
        super();
        this.state = {
            pizzaList: [],
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost:7000/getOrderPizza")
            .then((res) => {
                console.log(res.data);

                this.setState({
                    pizzaList: res.data,
                });
            })

            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        var data = this.state.pizzaList.map((pizza) => (
            <div class="card-deck mb-3 text-center card-container">
                <div class="card mb-4 box-shadow card-container">
                    <div class="card-header" style={{ background: "#D6DBDF" }}>
                        <h4 class="my-0 font-weight-normal">
                            <b>{pizza.name}</b>
                        </h4>
                    </div>
                    <div class="card-body">
                        <img style={{ width: "300px" }} src={pizza.image} />
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>
                                <h4>
                                    {pizza.type == "veg"
                                        ? "🟩VEG"
                                        : "🟥NON-VEG"}
                                </h4>
                            </li>
                            <br />
                            <li>
                                <h5>
                                    PRICE: {"\u20b9"}
                                    {pizza.price}
                                </h5>
                            </li>
                            <li>
                                <b>TOPPINGS: </b>
                                {pizza.topping}
                            </li>
                            <li>
                                <b>INGREDIENTS: </b>
                                {pizza.ingredients}
                            </li>
                        </ul>
                        <button
                            type="button"
                            class="btn btn-lg alert alert-warning btn btn-warning"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        ));
        return <div align="center">{data}</div>;
    }
}
export default OrderPizza;
