import React, { Component } from "react";
import axios from "axios";
class Httpdemo extends Component {
    constructor() {
        super();
        axios
            .get("https://trainingdata-13117.firebaseio.com/courses.json", {
                params: {
                    userId:3
                }
            })
            .then((response) => {
                console.log("Response=" + JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log("There is error");
            });
    }
    render() {
        return (
            <div>
                <h3>AXIOS HTTP Client</h3>
            </div>
        );
    }
}
export default Httpdemo;
