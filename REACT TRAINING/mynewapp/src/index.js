import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Shivam from "./Shivam";
import Tryconditionalrender from "./Tryconditionalrender";
import Listdemo from "./Listdemo";
import Oneway from "./Oneway";
import Twoway from "./Twoway";
import UseHook from "./UseHook";
import Activity1 from "./Activity1";
import Activity2 from "./Activity2";
// import BaseComponent from "./BaseComponent";
// import Container from "./HOCActivity";
// import ContainerPropState from "./BaseComponentPropState";
import Httpdemo from "./Httpdemo";
import Httpdemo2 from "./Httpdemo2";
// import HOCActivity from "./HOCActivity";

ReactDOM.render(
    <React.StrictMode>
        {/* <App />
        <Tryconditionalrender />
        <Listdemo /> */}
        {/* <Oneway />
        <Twoway/> */}
        {/* <UseHook/> */}
        {/* <Activity1/> */}
        {/* <Activity2/> */}
        {/* <Container /> */}
        {/* <ContainerPropState/> */}
        {/* <Httpdemo/> */}
        <Httpdemo2/>
        {/* <Container/> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
