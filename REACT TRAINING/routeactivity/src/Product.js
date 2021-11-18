import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Product extends Component{
    products = [{
        "productno": 111,
        "name": "IPhone",
        "manufacturer": "Apple",
        "price": "Rs. 45000"
      },
      {
        "productno": 121,
        "name": "IPad",
        "manufacturer": "Apple",
        "price": "Rs. 34500"
      },
      {
        "productno": 131,
        "name": "IPod",
        "manufacturer": "Apple",
        "price": "Rs. 32222"
      },
      {
        "productno": 141,
        "name": "Moto G",
        "manufacturer": "Motorola",
        "price": "Rs. 35678"
      },
      {
        "productno": 151,
        "name": "Moto X",
        "manufacturer": "Motorola",
        "price": "Rs. 43434"
      }
      ]

      listOfProducts = this.products.map(
        (product, id) =>  <tr key={id}>
              <td><Link to={`/product/productdetails/${product.name}/${product.productno}/${product.manufacturer}/${product.price}`}>{product.productno}</Link></td>
          </tr>
      )
    render(){
        return(
            <div>
                <h1>Product Component</h1>
                <table className="products">
                <thead >
                    <tr>
                        <th>product no</th>
                       
                    </tr>
                    
                </thead>
                <tbody >
                    {this.listOfProducts}
                </tbody>
            </table>
           

            </div>
        )
    }
}

export default Product