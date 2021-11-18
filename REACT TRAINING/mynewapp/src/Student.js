import { Component } from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            marks: 35,
        };
    }
    modifyState() {
        if (this.state.marks < 100) {
            this.setState({
                marks: this.state.marks + 5,
            });
        } else {
            alert("Student marks cannot be more than 100");
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Student details are Roll Number= {this.props.roll} and Name=
                    {this.props.name}
                </h2>
                <button onClick={() => this.modifyState()}>
                    Click to Increase Marks by 5
                </button>
                <h2>Student Marks {this.state.marks}</h2>
            </div>
        );
    }
}
export default Student;
