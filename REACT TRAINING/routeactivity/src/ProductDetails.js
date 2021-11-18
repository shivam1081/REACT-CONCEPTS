import React, {Component} from 'react';

class ProductDetails extends Component{
    render(){
        let myLayout = '';

        if(this.props.match.params.pid == undefined){
            myLayout = <h4>No Data to show </h4>

        }else {
            myLayout =
            <div className="card">
            <h3 style={{"backgroundColor": "#61dafb" , "color" : "white"}}>Selected Product is </h3>
            <div className="container">
            <label>Product Name   : </label>{this.props.match.params.pname}<br/>
            <label>Product Number :</label>{this.props.match.params.pid}<br/>
            <label>Product Manuf  :</label>{this.props.match.params.manf}<br/>
            <label>Product Price</label>{this.props.match.params.price}<br/>
            </div>
          </div>
           
        }
        return (
            <div>
                {myLayout}
            </div>
        )
    }
}

export default ProductDetails;