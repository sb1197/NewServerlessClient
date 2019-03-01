import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DashboardComponent from "../components/dashboardComponent";
class Dashboard extends Component {
    // logout = (e) => {
    //     e.preventDefault();
    //     localStorage.clear();
    // }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DashboardComponent props={this.props} />
            </div>
        );
    }
}
export default withRouter(Dashboard);