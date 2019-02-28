import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { resetPassword }  from "../services/userService";
class ForgotPassComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            newpassword: '',
            toast : false
        } 
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })
    }

    handlenewpasswordChange = (event) => {
        const newpassword = event.target.value
        this.setState({ newpassword: newpassword })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === "") {
            toast("Password cannot be empty",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (this.state.newpassword === "") {
            toast("Confirm Password cannot be empty",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (this.state.password.length < 8) {
            toast("Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.newpassword.length < 8) {
            toast("Confirm Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password !== this.state.newpassword) {
            toast("Password and Confirm password must be same", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else 
        {
            event.preventDefault();
            let current_url = window.location.pathname;
            let verify_user_token = current_url.substr(15)
            console.log('49--resetpassComponent--Current url is--:',current_url);
            console.log('50--resetpassComponent--Token is--:',verify_user_token);
            resetPassword(this.state.password, verify_user_token);
        }
    }
   
    render() {
        return (
            <div>
                <div>
                    <label><b>New Password</b></label>
                    <input type="password" placeholder="Enter new password" name="password" value={this.state.password} onChange={this.handlepasswordChange} style={{marginBottom:"20px"}}/>                     
                    <label><b>Confirm New Password</b></label>                    
                    <input type="password" placeholder="Confirm new password" name="newpassword" value={this.state.newpassword} onChange={this.handlenewpasswordChange} style={{marginBottom:"20px"}}/>                      
                    <div style={{paddingTop:"10px"}}> 
                    <Button style=
                    {{
                        backgroundColor:"darkgreen",
                        color: "white",
                        padding: "10px 20px",
                        margin: "9px auto",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        boxAlign: "center"
                    }} type="submit" onClick={this.handleSubmit}>
                    <b>Update Password</b>
                     </Button>
                    </div>
                </div> 
                <ToastContainer/>                              
            </div>
        )
    } 
}

export default withRouter(ForgotPassComponent);