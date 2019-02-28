import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DashboardComponent from "../components/dashboardComponent";
// import { Button } from "@material-ui/core";
class Dashboard extends Component {
    // logout = (e) => {
    //     e.preventDefault();
    //     localStorage.clear();
    //     this.props.history.push('/login');
    // }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                 {/* <div className="container" style={{ backgroundColor: "#006600", color: "white" }}>
                    <h1 style={{ marginLeft: "280px" }}>Welcome to Fundoo Notes</h1>
                    <Button id="logoutButton" onClick={this.logout}>SIGN OUT</Button>
                </div>  */}
                 <div>
                    <DashboardComponent props={this.props} />
                </div> 
            </div>
        );
    }
}
export default withRouter(Dashboard);