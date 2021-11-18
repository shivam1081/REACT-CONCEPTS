//fetching the employees details from MongoDB using the data stored by post method

import axios from "axios";
import { Component } from "react";



class FetchFruits extends Component {
    constructor() {
        super();
        this.state = {
            fruitName: "",
            fruitURL: "",
            fruitPrice: "",
            fruitList: [],
        };

        this.handleFetch = this.handleFetch.bind(this);
    }

    handleFetch(e) {
        e.preventDefault();
        axios
            .get("http://localhost:7000/getFruit")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    fruitList: res.data,
                });

                // document.write(JSON.stringify(res.data));
            })
            .catch((err) => {
                document.write(err);
            });
    }

    render() {
        const arr = this.state.fruitList.map((fruit) => (
            <div key={fruit.id} class="grid-container" align="center" >
                
                <div>
                <img src={fruit.image} />
                    <h4>Name: {fruit.name}</h4>
                    <h4>Price: {fruit.price}{"\u20b9"}</h4>
                </div>
            </div>
        ));

        return (
            <div style={{ textAlign: "center" }}>
                <h1> Fruit Details </h1>

                <form onSubmit={(e) => this.handleFetch(e)}>
                    <input type="submit" value="Fetch" className="btn" />
                </form>
                <div align="center">{arr}</div>
                
            </div>
        );
    }
}

export default FetchFruits;
