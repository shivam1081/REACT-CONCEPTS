import React, { Component } from "react";
import axios from "axios";
const api = axios.create({
    baseURL: "https://trainingdata-13117.firebaseio.com",
});
class Httpdemo2 extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
        };
    }

    componentDidMount() {
        api.get("./courses.json", { params: { courseID: 1 } })
            .then((res) => {
                this.setState({
                    results: res.data,
                });
                console.log("Results" + JSON.stringify(this.state.results));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h1>Data for Course Id 1</h1>
            </div>
        );
    }
}
export default Httpdemo2;
