import React,{ Component } from "react";
import * as authorActions from './action/authorActions';
import authorstore from "./stores/authorStore";
class AuthorPage extends Component{
    constructor(){
        super();
        this.getAuthors = this.getAuthors.bind(this);
        this.state={
            authors: authorstore.getAllAuthors()
        }
    }
    componentWillMount(){
        authorstore.on("change",this.getAuthors);
    }
    getAuthors(){
        this.setState({
            authors:authorstore.getAllAuthors()
        })
    }
    createAuthor(){
        authorActions.createAuthor(this.refs.aname.value);
    }
    render(){
        const auhtors =this.state.authors;
        var li= auhtors.map((auhtor) =>
        <li>{auhtor.authorName}</li>);
        return(
            <div>
                <table border="3" cellSpacing={6} cellPadding={4}>
                    <tr><td>
                        <label>Enter Author Name : </label></td>
                        <td><input type="text" ref="aname"></input></td></tr>
                        <tr><td colSpan="2"><button onClick={this.createAuthor.bind(this)}>Create Author</button></td></tr>
                        <tr><td colSpan="2"><h3>Auhtors Details</h3>
                        <ul>
                            {li}
                        </ul></td></tr>
                </table>
            </div>
        )

    }
}
export default AuthorPage;