import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

class SignOut extends React.Component {
    state = {
        open: false,
    };
    constructor(props) {
        super(props);
    }
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleAddAccount = (event) => {
        event.preventDefault();
        this.props.props1.history.push('/registration');
    }

    handleLogout = (event) => {
        console.log(this.props.props1);

        event.preventDefault();
        this.props.props1.history.push('/login');
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <div>
                    <IconButton buttonRef={node => {
                        this.anchorEl = node;
                    }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}>
                        <Tooltip title="Account" style={{ height: "26px", width: "26px" }}>
                            {/* <img src={require('/home/bridgeit/Shweta/fundooNotes/frontend/src/assets/images/account.png')} alt="refresh icon" /> */}
                            <AccountCircle />
                        </Tooltip>
                    </IconButton>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper style={{ width: "320px", marginTop: "10px", height: "200px" }}>
                                    <div id="PaperDiv1">
                                        <div>
                                            <AccountCircle id="accountCircle" />
                                        </div>
                                        <div style={{ padding: "30px" }}>
                                            <label>Shweta Bochare</label>
                                        </div>
                                    </div>
                                    <div id="signOutMenu">
                                        <MenuItem id="signOutMenuItem" onClick={this.handleAddAccount}>
                                            Add account
                                        </MenuItem>
                                        <MenuItem id="signOutMenuItem" onClick={this.handleLogout}>
                                            Logout
                                        </MenuItem>
                                    </div>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

SignOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignOut);
