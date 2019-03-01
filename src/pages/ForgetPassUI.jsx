import React, { Component } from "react";
import ForgotPassComponent from "../components/forgetComponent";
class ForgotPassword extends Component {
    render() {
        localStorage.clear();
        return (
            <div id="headerDiv">
                <div style={{ textAlign: "center" }}>
                    <h1><b>FUNDOO</b></h1>
                    <h2 id="h2"><b>Forgot Password</b></h2>
                </div>
                <ForgotPassComponent />
            </div>
        );
    }
}
export default ForgotPassword;