import axios from "axios";
import { Component } from "react";


class Form extends Component{
    constructor(){
        super();
        this.state = {
            rating : 0,
            bookData : []
        }
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRatingChange(e){
        this.setState({
            rating : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        axios.get("http://localhost:7000/?rating=" + this.state.rating )
        .then((res)=>{
            console.log("got response......")
            this.setState({
                bookData : res.data.result
            })
            // document.write(JSON.stringify(res.data.result));
        })
        .catch((err)=>{
            document.write(err)
        })
    }

    render(){
        console.log(this.state.bookData);

        var bookList = this.state.bookData.map((book,id) =>

            <tr key={id}>
                <td>{book.rating}</td>
                <td>{book.title}</td>
                <td>{book.pageCount}</td>
                <td>{book.reviews}</td>
            </tr>
        );

        return(
            <div style={{textAlign:"center", margin:"40px"}}>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <h2>Search by rating  : </h2>
                    <input type="text" value = {this.state.rating} name = "rating" onChange = {(e)=>this.handleRatingChange(e)}/>
                    <input type="submit" value="Search" className="btn"></input>
                </form>

                <div>
                    <table>
                        <thead>
                            <th>Rating</th>
                            <th>Title</th>
                            <th>Page Count</th>
                            <th>Reviews</th>
                        </thead>

                        <tbody>
                            {bookList}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
    }
}

export default Form;