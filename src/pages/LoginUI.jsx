import React, { Component } from "react";
import LoginComponent from "../components/loginComponent";
class Login extends Component {
    render() {
        localStorage.clear();
        return (
            <div id="headerDiv">
                <div style={{ textAlign: "center"}}>
                    <h1><b>FUNDOO</b></h1>
                    <h2 id="h2"><b>Sign In</b></h2>
                </div>
                <LoginComponent />
            </div>
        );
    }
}
export default Login;