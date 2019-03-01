import React, { Component } from "react";
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
            console.log('username in login :',this.state.username);
            console.log('password in login :',this.state.password);
            userLogin(this.state.username, this.state.password);
            this.setState({ username: '' })
            this.setState({ password: '' })
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <TextField
                        id="email_input"
                        label="Email"
                        className={classes.textField}
                        value={this.state.username}
                        onChange={this.handleusernameChange('username')}
                        type="email"
                        name="username"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="email_input"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handlepasswordChange('password')}
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <div style={{ marginTop: "15px"}}>
                        <Button id="SignIn" type="submit" onClick={this.handleSubmit}>
                            <b>SIGN IN</b>
                        </Button>
                        <div id="Signin_buttonDiv">
                        <Link to="registration" id="link">
                            <b>Create Account</b>
                        </Link>
                        <Link to="forgetPassword" id="link">
                            <b>Forgot Password?</b>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
            </div >
        )
    }
}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);