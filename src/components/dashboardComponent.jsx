import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Close'
import PersistentDrawerLeft from '../components/sideNavigationBar'
import SignOut from '../components/signout'

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false
    //     };
    // }

    // handleToggle = () => {
    //     this.setState(state => ({ open: !state.open }));
    // }


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false,
    //         searchNote: ""

    //     }
    //     this.handleAppbar = this.handleAppbar.bind(this);
    //     this.handleSearchBar = this.handleSearchBar.bind(this);
    // }
    // handleToggle () {
    //     this.props.slideCards();
    //     this.setState({ open: !this.state.open });
    // }
    // handleAppbar() {
    //     this.props.notePropsToApp();
    // }

    // handleSearchBar(evt) {
    //     this.setState({ searchNote: evt.target.value });
    //     this.props.getSearchedNotes(evt.target.value)
    // }

    // searchLabels(value) {
    //     this.props.searchLabels(value)
    // }
    // handleRefresh(evt) {
    //     evt.preventDefault();
    //     window.location.reload();
    // }
    // NavBar() {
    //     this.setState({render : !this.state.render})
    // }

    handleSignout = () => {
       
      };

    render() {
        return (
            // <MuiThemeProvider theme={theme}>
            <div style={{ display:"flex"}}>
            <AppBar position="fixed" id="appbar" color="inherit">
                <div>
                    <Toolbar>
                        <div id="appBarMenuAndTitle">
                            <div id="appBarMenuAndTitle1" >
                                <div>
                                    <PersistentDrawerLeft />
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div id="keepImage">
                                        <img src={require('../assets/images/keep.png')} alt="keep icon" />
                                    </div>
                                    <span className="title"><b>fundooNotes</b></span>
                                </div>
                                <div id="searchBar">
                                    <IconButton color="inherit" aria-label="Open drawer" style={{ marginLeft: "8px", float: "left", position: "absolute", top: "0" }} >
                                        <Tooltip title="Search">
                                            <SearchIcon style={{ color: "gray" }} />
                                        </Tooltip>
                                    </IconButton>
                                    <InputBase
                                        id="searchInputBase"
                                        placeholder="Search"
                                    // value={this.state.searchNote}
                                    // onChange={this.handleSearchBar}
                                    />
                                    <IconButton color="inherit" aria-label="Open drawer" style={{ marginLeft: "0px" }} >
                                        <Tooltip title="Clear">
                                            <ClearIcon style={{ color: "gray" }} />
                                        </Tooltip>
                                    </IconButton>
                                </div>
                                <div style={{ marginLeft: "15px" }}>
                                    <IconButton onClick={this.handleRefresh}>
                                        <Tooltip title="Refresh" >
                                            <img src={require('../assets/images/refresh.svg')} alt="refresh icon" />
                                        </Tooltip>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <Tooltip title="Grid View" >
                                            <img src={require('../assets/images/listView.svg')} alt="refresh icon" />
                                        </Tooltip>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <Tooltip title="Settings" >
                                            <img src={require('../assets/images/setting.svg')} alt="refresh icon" />
                                        </Tooltip>
                                    </IconButton>
                                </div>

                                <div style={{ paddingLeft: "120px", display: "flex" }}>
                                    <div>
                                        <IconButton>
                                            <Tooltip title="Google apps" >
                                                <img src={require('../assets/images/baseline-apps-24px.svg')} alt="refresh icon" />
                                            </Tooltip>
                                        </IconButton>
                                    </div>

                                    <div>
                                        <IconButton>
                                            <Tooltip title="Notifications" style={{ width: "25px" }} >
                                                <img src={require('../assets/images/notify.jpg')} alt="refresh icon" />
                                            </Tooltip>
                                        </IconButton>
                                    </div>
                                    <div>
                                        {/* <IconButton onClick={this.handleSignout()}>
                                            <Tooltip title="Account" style={{ height: "26px", width: "26px" }}>
                                                <img src={require('/home/bridgeit/Shweta/fundooNotes/frontend/src/assets/images/account.png')} alt="refresh icon" />
                                            </Tooltip>
                                        </IconButton> */}
                                        <SignOut props1={this.props.props}/>
                                    </div>
                                </div>
                                {/* <CardsView appPropstoCardsView={this.handleAppbar} /> */}
                            </div>
                        </div>
                    </Toolbar>
                </div>
                {/* <DrawerMenu
                    appBarProps={this.state.open}
                    handleNavigation={this.props.handleNavigation}
                    searchLabels={(value) => this.searchLabels(value)}
                    makeLabelFalse={this.props.makeLabelFalse} /> */}
            </AppBar>
            </div>
            // </MuiThemeProvider>  
        )
    }
}
export default DashboardComponent;