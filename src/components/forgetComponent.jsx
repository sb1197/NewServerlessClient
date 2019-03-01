import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { forgetPassword } from "../services/userService";

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
            username: '',
            toast: false
        }
    }
    handleusernameChange = username => (event) => {
        this.setState({ [username]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === "") {
            toast("Username cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
            toast("Invalid username", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else {
            // console.log('31--in component--username is:',this.state.username);
            forgetPassword(this.state.username);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <TextField
                        style = {{
                            width: "90%",
                        }}
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
                    <Button id="SendLink" type="submit" onClick={this.handleSubmit}>
                        <b>Send Link</b>
                    </Button>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

ForgotPassComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassComponent);