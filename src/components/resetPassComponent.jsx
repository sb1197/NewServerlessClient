import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { resetPassword } from "../services/userService";

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

class ForgotPassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            newpassword: '',
            toast: false
        }
    }
    handlepasswordChange = password => (event) => {
        this.setState({ [password]: event.target.value })
    }

    handlenewpasswordChange = newpassword => (event) => {
        this.setState({ [newpassword]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === "") {
            toast("Password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (this.state.newpassword === "") {
            toast("Confirm Password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
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
        else {
            event.preventDefault();
            let current_url = window.location.href;
            let verify_user_token = current_url.substr(39)
            console.log('49--resetpassComponent--Current url is--:', current_url);
            console.log('50--resetpassComponent--Token is--:', verify_user_token);
            resetPassword(this.state.password, verify_user_token);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    style={{ width: "92%" }}
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
                    style={{ width: "92%" }}
                    label="Confirm Password"
                    className={classes.textField}
                    value={this.state.newpassword}
                    onChange={this.handlenewpasswordChange('newpassword')}
                    type="password"
                    name="newpassword"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <Button id="SendLink" type="submit" onClick={this.handleSubmit}>
                    <b>Submit</b>
                </Button>
                <ToastContainer />
            </div>
        )
    }
}

ForgotPassComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassComponent);