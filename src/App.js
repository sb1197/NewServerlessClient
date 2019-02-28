import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/LoginUI';
import Registration from './pages/RegisterUI';
import Dashboard from './pages/DashboardUI';
import ForgotPass from './pages/ForgetPassUI';
import EmailVerfication from './pages/EmailVerifyUI';
import ResetPassword from './pages/ResetPasswordUI';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/verifyEmail/" component={EmailVerfication}></Route>
             <Route path="/dashboard" component={Dashboard}></Route> 
            <Route path="/forgetPassword" component={ForgotPass}></Route>
            <Route path="/resetPassword" component={ResetPassword}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
