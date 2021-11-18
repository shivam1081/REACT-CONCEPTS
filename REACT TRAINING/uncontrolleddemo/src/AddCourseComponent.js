import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const api = axios.create({
    baseURL: "https://trainingdata-13117.firebaseio.com",
});

class AddCourseComponent extends Component {
    constructor() {
        super();
        this.addCourse = this.addCourse.bind(this);
    }

    addCourse() {
        let body = JSON.stringify({
            courseName: this.refs.courseName.value,
            courseID: this.refs.courseID.value,
        });

        api.post("/courses.json", body)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Course Registration System</h1>
                <label>Enter Course Name</label>
                <input type="text" ref="courseName" />
                <br />
                <label>Enter Course ID</label>
                <input type="text" ref="courseID" />
                <br />

                <input
                    type="submit"
                    onClick={this.addCourse}
                    value="Add Course"
                ></input>
            </div>
        );
    }
}

export default AddCourseComponent;
