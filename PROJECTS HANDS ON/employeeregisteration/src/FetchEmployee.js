//fetching the employees details from MongoDB using the data stored by post method

import axios from "axios";
import { Component } from "react";

class FetchEmployee extends Component{
    constructor(){
        super();
        this.state = {
            empName : "",
            projectName : "",
            projectTitle : "",
            empList : []
        }

        this.handleEmpNameChange = this.handleEmpNameChange.bind(this);
        this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
        this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    }

    handleEmpNameChange(e){
        this.setState({
            empName : e.target.value
        })
    }

    handleProjectNameChange(e){
        this.setState({
            projectName : e.target.value
        })
    }

    handleProjectTitleChange(e){
        this.setState({
            projectTitle : e.target.value
        })
    }

    handleSubmit(e){
        // e.preventDefault();
        // var empArr = [];
        // empArr.push(JSON.stringify(this.state));
        // console.log(empArr);

        var emp = {
            "name" : this.state.empName,
            "projectName" : this.state.projectName,
            "projectTitle" : this.state.projectTitle
        }

        console.log(emp);

        axios.post("http://localhost:7000/addEmployee" , emp)
        .then((res)=>{
            console.log("posted data");
           
            alert("Employee Added!");
        })
        .catch((err)=>{
            document.write(err)
        })
    }

    handleFetch(e){
        e.preventDefault();
        axios.get("http://localhost:7000/getEmp")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                empList : res.data
            })
        
            // document.write(JSON.stringify(res.data));
           
        })
        .catch((err)=>{
            document.write(err)
        })
    }
    
    render(){
        const arr = this.state.empList.map((emp) => 
        <tr>
            <td>{emp.name}</td>
            <td>{emp.projectName}</td>
            <td>{emp.projectTitle}</td>
        </tr>
        )

        return(
            <div style ={{textAlign:"center"}}>
                <h1> Employee Details Form </h1>
                <form onSubmit={(e)=>this.handleSubmit(e)}  >
                    <div className="form-class">
                        <label>Employee Name</label>
                        <input type = "text" value={this.state.empName} onChange= {(e)=>this.handleEmpNameChange(e)} />
                    </div>
                    <div className="form-class">
                        <label>Project Name</label>
                        <input type = "text" value={this.state.projectName} onChange= {(e)=>this.handleProjectNameChange(e)} />
                    </div>
                    <div className="form-class">
                        <label>Project Title</label>
                        <input type = "text" value={this.state.projectTitle} onChange= {(e)=>this.handleProjectTitleChange(e)} />
                    </div>
                    <input type = "submit" value = "Save" className="btn" />
                </form>
                <form onSubmit={(e)=>this.handleFetch(e)}>
                    <input type = "submit" value = "Fetch" className="btn" />
                </form>

                
                    <table>
                        <thead>
                            <th>Employee Name</th>
                            <th>Project Name</th>
                            <th>Project Title</th>
                        </thead>
                        <tbody>
                            {arr}
                        </tbody>
                    </table>
                
            </div>
        );
    }
}

export default FetchEmployee;