import React, { Component } from "react";
import LoginComponent from "../components/loginComponent";
class Login extends Component {
    render() {
        localStorage.clear();
        return (
            <div style={{ width: "500px", margin: "70px auto", border: "1px solid black", padding: "30px", paddingTop: "10px", backgroundColor: "floralwhite" }}>
                <div style={{ textAlign: "center", color: "green" }}>
                    <h1><b>LOGIN</b></h1>
                </div>
                <div>
                    <LoginComponent />
                </div>
            </div>
        );
    }
}
export default Login;