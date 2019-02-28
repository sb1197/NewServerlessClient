import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import  {userRegister}  from "../services/userService";
class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            username: '',
            confirmEmail: '',
            password: '',
            confirmPass: '',
            toast: false
        }
        this.baseState = this.state
    }
    handlefnameChange = (event) => {
        const fname = event.target.value
        this.setState({ fname: fname })
    }
    handlelnameChange = (event) => {
        const lname = event.target.value
        this.setState({ lname: lname })
    }
    handleusernameChange = (event) => {
        const username = event.target.value
        this.setState({ username: username })
    }
    handleconfirmEmailChange = (event) => {
        const confirmEmail = event.target.value
        this.setState({ confirmEmail: confirmEmail })
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleconfirmPassChange = (event) => {
        const confirmPass = event.target.value
        this.setState({ confirmPass: confirmPass })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.fname === "") {
            toast("First name cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.lname === "") {
            toast("Last name cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.username === "") {
            toast("Email cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
            toast("Invalid Email", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.confirmEmail === "") {
            toast("Confirm Email cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.confirmEmail)) {
            toast("Invalid Confirm Email", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.username !== this.state.confirmEmail) {
            toast("Email and Confirm Email must be same", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password === "") {
            toast("Password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password.length < 8) {
            toast("Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.confirmPass === "") {
            toast("Confirm Password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password !== this.state.confirmPass) {
            toast("Password and confirm password must be same", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else 
        {
            event.preventDefault();
            userRegister(this.state.fname, this.state.lname, this.state.username, this.state.password);
        }
    }

    resetForm = (event) => {
        this.setState(this.baseState)
        event.preventDefault();
        this.props.history.push('/registration');
    }
    render() {
        return (
            <div>
                <div id='regMainDiv'>
                    <div>
                        <table>
                            <tr><td>First Name</td>
                                <td><input type="text" id = 'fname' placeholder=" " name="fname" value={this.state.fname} onChange={this.handlefnameChange} /></td>
                            </tr>
                            <tr><td>Last Name</td>
                                <td><input type="text" id = "lname" placeholder=" " name="lname" value={this.state.lname} onChange={this.handlelnameChange} /></td>
                            </tr>
                            <tr><td>Email Address</td>
                                <td><input type="text" id = "username" placeholder=" " name="username" value={this.state.username} onChange={this.handleusernameChange} /></td>
                            </tr>
                            <tr><td>Confirm Email Address</td>
                                <td><input type="text" id = "confirmEmail" placeholder=" " name="confirmEmail" value={this.state.confirmEmail} onChange={this.handleconfirmEmailChange} /></td>
                            </tr>
                            <tr><td>Password</td>
                                <td><input type="password"  id = "password" placeholder=" " name="password" value={this.state.password} onChange={this.handlepasswordChange} /></td>
                            </tr>
                            <tr><td>Confirm Password</td>
                                <td><input type="password" id = "confirmPass" placeholder=" " name="confirmPass" value={this.state.confirmPass} onChange={this.handleconfirmPassChange} /></td>
                            </tr>
                        </table>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button id="logoutButton" onClick={this.handleSubmit}>REGISTER</Button>
                        <Button id="logoutButton" onClick={this.resetForm}>RESET</Button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        )
    }
}
export default withRouter(RegisterComponent);