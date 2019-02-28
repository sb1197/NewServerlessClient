import React, { Component } from "react";
// import {withRouter} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { userLogin } from "../services/userService";

const styles = theme => ({
    container: {
        minHeight: "400px",
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toast: false
        }
    }
    handleusernameChange = username => (event) => {
        this.setState({ [username]: event.target.value });
    }
    handlepasswordChange = password => (event) => {
        this.setState({ [password]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === "") {
            toast("Username cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password === "") {
            toast("Password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
            toast("Invalid username", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.password.length < 8) {
            toast("Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else {
            userLogin(this.state.username, this.state.password);
            this.setState({ username: '' })
            this.setState({ password: '' })
        }
    }
    register = (e) => {
        e.preventDefault();
        this.props.history.push('/registration');
    }
    forgetPass = (e) => {
        e.preventDefault();
        this.props.history.push('/forgetPassword');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>

                <div>
                    {/* <label><b>Username</b></label> */}
                    <TextField
                        label="Username"
                        className={classes.textField}
                        value={this.state.username}
                        onChange={this.handleusernameChange}
                        type="text"
                        name="username"
                        autoComplete="current-username"
                        margin="normal"
                        variant="outlined"
                    />
                     <TextField
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleusernameChange}
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    {/* <input type="text" id= "username" placeholder="Enter useremail" name="username" value={this.state.username} onChange={this.handleusernameChange} style={{marginBottom:"20px"}}/>                      */}
                    {/* <label ><b>Password</b></label>
                    <input type="password" id="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handlepasswordChange} /> */}
                    <div style={{ paddingTop: "10px" }}>
                        <Button style=
                            {{
                                backgroundColor: "darkgreen",
                                color: "white",
                                padding: "10px 20px",
                                margin: "9px auto",
                                border: "none",
                                cursor: "pointer",
                                width: "100%",
                                boxAlign: "center"
                            }} type="submit" onClick={this.handleSubmit}>
                            <b>SIGN IN</b>
                        </Button>

                        <div style={{ display: "flex", padding: "50px", paddingTop: "20px", justifyContent: "space-between" }}>
                            <Button style={{ backgroundColor: "burlywood" }} type="submit" onClick={this.register}>
                                <b>CREATE ACCOUNT</b>
                            </Button>
                            <Button style={{ backgroundColor: "burlywood" }} type="submit" onClick={this.forgetPass}>
                                <b>FORGOT PASSWORD</b>
                            </Button>
                        </div>
                    </div>
                </div>
                <ToastContainer />

            </div>
        )
    }
}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);