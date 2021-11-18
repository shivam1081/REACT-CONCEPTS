import { Component } from "react";
class App extends Component {
    constructor(props) {
        super();

        this.state = {
            //firstName: "",
            errors: {
                firstname: "",
            },
            lastName: "",
            number: "",
            country: "",
        };

        //this.handleFN = this.handleFN.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.handleLN = this.handleLN.bind(this);
        this.handleno = this.handleno.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //

    changeFirstName(event) {
        let errors = this.state.errors;
        errors.firstname =
            event.target.value.length < 5
                ? "Full Name must be at least 5 characters long!"
                : " ";
        this.setState({
            firstname: event.target.value,
        });
      
      
    }
  

    handleLN(event) {
        this.setState({ lastName: event.target.value });
    }
    handleno(event) {
        this.setState({ number: event.target.value });
    }
    handleCountry(event) {
        this.setState({ country: event.target.value });
    }
    handleSubmit(event) {
        if (this.state.firstname.length < 5) {
          alert("Errors in the form");
          event.preventDefault();
        } else {
            console.log("FirstName: " + this.state.firstname);
            console.log("LastName: " + this.state.lastName);
            console.log("Number: " + this.state.number);
            console.log("Country: " + this.state.country);
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter the First name: <br />
                    {/* <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFN}
                    /> */}
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Add first Name"
                        onChange={this.changeFirstName}
                    />
                    {this.state.errors.firstname.length > 0 && (
                        <span className="error">
                            {this.state.errors.firstname}
                        </span>
                    )}
                    <br />
                    Enter the Last name:
                    <br />
                    <input
                        type="text"
                        value={this.state.LastName}
                        onChange={this.handleLN}
                    />
                    <br />
                    Enter the Number:
                    <br />
                    <input
                        type="text"
                        value={this.state.number}
                        onChange={this.handleno}
                    />
                    <br />
                    Enter the Country:
                    <br />
                    {/* <input type="" value={this.state.country} onChange={this.handleCountry} /> */}
                    <select
                        name="countries"
                        id="Countries"
                        value={this.state.country}
                        onChange={this.handleCountry}
                    >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Dubai">Dubai</option>
                        <option value="England">England</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default App;
