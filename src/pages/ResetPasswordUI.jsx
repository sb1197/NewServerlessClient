import React, { Component } from "react";
import ResetPassComponent from "../components/resetPassComponent";
class ResetPassword extends Component {
    render() {
        return (
            // <div style={{
            //     width: "700px",
            //     height: "380px",
            //     margin: "70px auto",
            //     border: "1px solid black",
            //     padding: "30px",
            //     paddingTop: "10px",
            //     backgroundColor: "floralwhite"
            // }}>
            //     <div style={{ textAlign: "center", color: "green" }}>
            //         <h1><b>Reset Password</b></h1>
            //         <h3>Please enter new password ...</h3>
            //     </div>
            //     <div>
            //         <ResetPassComponent />
            //     </div>
            // </div>

            <div id="headerDiv">
                <div style={{ textAlign: "center" }}>
                    <h1><b>FUNDOO</b></h1>
                    <h2 id="h2"><b>Reset Password</b></h2>
                </div>
                <ResetPassComponent />
            </div>
        );
    }
}
export default ResetPassword;