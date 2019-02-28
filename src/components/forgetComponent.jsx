import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { forgetPassword }  from "../services/userService";
class ForgotPassComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            toast : false
        } 
    }
    handleusernameChange = (event) => {
        const username = event.target.value
        this.setState({ username: username })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === "") {
            toast("Username cannot be empty",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
            toast("Invalid username",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else 
        {
            // console.log('31--in component--username is:',this.state.username);
            forgetPassword(this.state.username);
        }
    }
   
    render() {
    
        return (
            <div>
                <div>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter useremail" name="username" value={this.state.username} onChange={this.handleusernameChange} style={{marginBottom:"20px"}}/>                     
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
                    <b>Send Link</b>
                     </Button>
                    </div>
                </div> 
                <ToastContainer/>                              
            </div>
        )
    } 
}

export default withRouter(ForgotPassComponent);