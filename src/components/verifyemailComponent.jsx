import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { verifyEmail } from '../services/userService'
class VerifyEmailComponent extends Component 
{
    handleSubmit=()=>{
        let url = window.location.href;
        console.log('url href is====',url);
        const verify_token = url.substr(37)
        console.log('8--in verify Component Verify token is:--',verify_token);
        verifyEmail(verify_token);
    }
    render() {
        return (
            <div>
                 <div style={{paddingTop:"10px"}}>
                    <Button id="SendLink" type="submit" onClick={this.handleSubmit}>
                    <b>Sign In</b>
                     </Button>
                 </div>
            </div>
        )}
}

export default VerifyEmailComponent;