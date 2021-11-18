import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Product from './Product';
import Contact from './Contact';
import About from './About'
import Location from './Location';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Cetagory from './Cetagory'

ReactDOM.render(<Router>
    <Route path="/" component={App}></Route>
    <Route path="/product" component={Product}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/contact/location" component={Location}></Route>
    <Route path="/cetagory" component={Cetagory} />
    <Route path="/product/productdetails/:pname/:pid/:manf/:price" component={ProductDetails}></Route>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
