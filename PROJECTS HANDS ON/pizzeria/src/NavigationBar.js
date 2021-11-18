import { Component } from "react";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

                {/* Creating a Navigation Bar */}
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a
                        class="navbar-brand"
                        style={{ fontSize: "30px" }}
                        href="#"
                    >
                        Pizzeria
                    </a>
                    <span style={{ fontSize: "50px", color: "GrayText" }}>
                        {" "}
                        |{" "}
                    </span>
                    <Link to="/HomePage" class="nav-link">
                        <img style={{ width: "80px" }} src="Logo.png" />
                    </Link>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/OrderPizza" class="nav-link">
                                Order Pizza
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/BuildYourPizza" class="nav-link">
                                Build Your Pizza
                            </Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <button type="button" class="btn btn-warning">
                                    Shopping Cart
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Adding the Image of the Body */}
            </div>
        );
    }
}
export default NavigationBar;
