import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { userRegister } from "../services/userService";

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

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            confirmPass: '',
            toast: false
        }
        this.baseState = this.state
    }
    handlefnameChange = fname => (event) => {
        this.setState({ [fname]: event.target.value })
    }
    handlelnameChange = lname => (event) => {
        this.setState({ [lname]: event.target.value })
    }
    handleusernameChange = username => (event) => {
        this.setState({ [username]: event.target.value })
    }
    handlepasswordChange = password => (event) => {
        this.setState({ [password]: event.target.value })
    }
    handleconfirmPassChange = confirmPass => (event) => {
        this.setState({ [confirmPass]: event.target.value })
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
        else {
            event.preventDefault();
            userRegister(this.state.fname, this.state.lname, this.state.username, this.state.password);
        }
    }

    resetForm = (event) => {
        this.setState(this.baseState)
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div id='regMainDiv'>
                    <div>
                        <TextField
                            id="input"
                            label="First Name"
                            className={classes.textField}
                            value={this.state.fname}
                            onChange={this.handlefnameChange('fname')}
                            type="text"
                            name="fname"
                            autoComplete="fname"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="input"
                            label="Last Name"
                            className={classes.textField}
                            value={this.state.lname}
                            onChange={this.handlelnameChange('lname')}
                            type="text"
                            name="lname"
                            autoComplete="lname"
                            margin="normal"
                            variant="outlined"
                        />
                        <div>
                            <TextField
                                style={{ width: "92%" }}
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
                        </div>
                        <TextField
                            id="input"
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
                        <TextField
                            id="input"
                            label="Confirm Password"
                            className={classes.textField}
                            value={this.state.confirmPass}
                            onChange={this.handleconfirmPassChange('confirmPass')}
                            type="password"
                            name="confirmPass"
                            autoComplete="current-confirmPass"
                            margin="normal"
                            variant="outlined"
                        />
                        <h5 id="message">Your password must contain 8 characters</h5>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Link to="registration" id="link" >
                        <span style={{ marginLeft:"35px"}} onClick={this.resetForm}><b>CLEAR</b></span>
                        </Link>
                        <Button id="Register" onClick={this.handleSubmit}>SUBMIT</Button>   
                    </div>
                    <ToastContainer />
                </div>
            </div>
        )
    }
}

RegisterComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RegisterComponent);