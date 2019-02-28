import React, { Component } from "react";
import VerifyEmailComponent from "../components/verifyemailComponent";
class EmailVerfication extends Component {
    render() {
        return (
            <div style={{ width: "700px", margin: "70px auto", border: "1px solid black", padding: "30px", paddingTop: "10px", backgroundColor: "floralwhite" }}>
                <div style={{ textAlign: "center", color: "green" }}>
                    <h1><b>Email Verfication is in Progress !!!</b></h1>
                </div>
                <div>
                    <VerifyEmailComponent />
                </div>
            </div>
        );

    }
}
export default EmailVerfication;