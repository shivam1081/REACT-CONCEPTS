//Reistering the employee and adding the data using the post method
import axios from 'axios';
const { Component } = require("react");



class Register extends Component{
    constructor(){
        super();
        this.state={
            employeeName: "",
            projectName: "",
            projectTitle: "",
        };
        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleForm(event){
        
        this.setState({
            [event.target.name]:event.target.value
            //employeeName:event.target.value,
            //projectName:event.target.value,
            //projectTitle:event.target.value,
        });
    }
    handleSubmit(event){
        var emp=[];
        emp.push(this.state);
        alert(JSON.stringify(emp));
        axios.post("http://localhost:7000/addEmployee",emp).then((res)=>{
            console.log(res);
            document.write(res.data);
        }).catch((error)=>{
            document.write(error);
        })
    }
    render(){
        return(
            <div>
                <h2>Employee details Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <h4>Employee name</h4>
                    <input type="text" name="employeeName" value={this.state.employeeName}
                        onChange={this.handleForm} />
                    <h4>Project name</h4><input type="text" name="projectName" value={this.state.projectName}
                    onChange={this.handleForm} />
                    <h4>Project Title</h4>
                    <input type="text" name="projectTitle"  value={this.state.projectTitle}
                    onChange= {this.handleForm} /> <br/>
                    <input type="submit" value="submit" />
                    <input type="submit" value="fetch"/>
                </form>
            </div>
        )
    }
}

export default Register ;