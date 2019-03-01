import React, { Component } from "react";
import VerifyEmailComponent from "../components/verifyemailComponent";
class EmailVerfication extends Component {
    render() {
        return (
            <div id="headerDiv">
                <div style={{ textAlign: "center" }}>
                    <h1><b>FUNDOO</b></h1>
                    <h2 id="h2"><b>Email Verfication is in Progress !!!</b></h2>
                </div>
                <VerifyEmailComponent />
            </div>
        );
    }
}
export default EmailVerfication;