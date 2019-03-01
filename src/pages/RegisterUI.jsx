import React, { Component } from "react";
import RegisterComponent from "../components/registerComponent";
class Registration extends Component {
    render() {
        localStorage.clear();
        return (
            <div id="headerDiv">
                <div style={{ textAlign: "center" }}>
                    <h1><b>FUNDOO</b></h1>
                    <h2 id="h2"><b>Create Account</b></h2>
                </div>
                <RegisterComponent />
            </div>
        );
    }
}
export default Registration;   