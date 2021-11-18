import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const api = axios.create({
    baseURL: "https://trainingdata-13117.firebaseio.com",
});

class Registration extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
            selectedCourse: [],
            regCourseList: [],
        };

        this.addedCourses = this.addedCourses.bind(this);
        this.registerParticipant = this.registerParticipant.bind(this);
    }

    addedCourses(event) {
        if (event.target.checked) {
            this.setState({
                selectedCourse: [
                    event.target.value,
                    ...this.state.selectedCourse,
                ],
            });
        } else {
            let index = this.state.selectedCourse.indexOf(event.target.value);
            if (index !== -1) {
                this.state.selectedCourse.splice(index, 1);
            }
        }
    }

    async componentDidMount() {
        // course List Fetchig
        let courseData = [];
        await api
            .get("/courses.json")
            .then((response) => {
                let temp = Object.values(response.data);
                let count = 0
                
                for(let data of temp ){

                    if(count<100){
     
                        if(data.courseID===4){
     
                     courseData.push(data)
     
                     count++;}
     
                    }
     
                 }
            })
            .catch((err) => console.log(err));
        this.setState({
            results: courseData,
        });
        this.componentUpdate();
    }

    async componentUpdate() {
        // Registered Courses List
        let regCourseData = [];
        await api
            .get("/registeredCourse.json")

            .then(function (response) {
                let temp = Object.values(response.data);

                for (let data of temp) {
                    regCourseData.push(data);
                }
            })
            .catch((err) => console.log(err));
        await this.setState({
            regCourseList: regCourseData,
        });
    }

    registerParticipant() {
        let body = JSON.stringify({
            partName: this.refs.partName.value,
            partID: this.refs.partID.value,
            courseDate: this.refs.courseDate.value,
            selectedCourse: this.state.selectedCourse,
        });

        api.post("/registeredCourse.json", body)
            .then((response) => {
                console.log(response);
                this.componentUpdate();
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Course Registration System</h1>
                <label>Enter Participant Name</label>
                <input type="text" ref="partName" />
                <br />
                <label>Enter Participant ID</label>
                <input type="text" ref="partID" />
                <br />
                <label>Enter Date</label>
                <input type="date" ref="courseDate" />
                <br />

                <h1>List of Courses</h1>

                <table className="courseData">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Select/Deselect</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.length ? (
                            this.state.results.map((course) => (
                                <tr key={course.courseID}>
                                    <td>{course.courseID}</td>
                                    <td>{course.courseName}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onClick={this.addedCourses}
                                            value={course.courseName}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>loading......</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <input
                    type="submit"
                    onClick={this.registerParticipant}
                    value="Register"
                ></input>

                <h1>Registered Courses</h1>

                <table className="courseData">
                    <thead>
                        <tr>
                            <th>Participant ID</th>
                            <th>Participant Name</th>
                            <th>Date of Course</th>
                            <th>Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.regCourseList.length ? (
                            this.state.regCourseList.map((participant) => (
                                <tr key={participant.partID}>
                                    <td>{participant.partID}</td>
                                    <td>{participant.partName}</td>
                                    <td>{participant.courseDate}</td>
                                    <td>{participant.selectedCourse}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No Courses Listed</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Registration;
