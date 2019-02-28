import axios from 'axios';
/** 
 * @param {*} fname First name 
 * @param {*} lname Last name
 * @param {*} username User email
 * @param {*} password User password
 * @description: This function pass the user input values fron UI to the server and 
 *               save the user details to the database and generate token for confirming useremail
 */
function userRegister(fname, lname, username, password) {
    axios.post('https://4pnr7j9868.execute-api.us-west-2.amazonaws.com/serverless/users/create',
        {
            firstName: fname,
            lastName: lname,
            userEmail: username,
            userPassword: password
        })
        .then(function (response) {
            console.log("response after register", response.data);
            // const token1 = response.data;
            // const token2 = token1.substring(34)
            // localStorage.setItem('verifyToken', token2);
            alert('Please check email to verify your email !!!');  
        })
        .catch(function (err) {
            console.log(err);
            alert('User with this Username already exists!!');
        });
}

/**
 * @param {*} token It is the token taken from url when user click on the email verification link
 * @description This method is to verify user email after registration is done.
 */
function checkToken(token) {
    console.log('63--inside check token---',token);
    axios.post("https://4pnr7j9868.execute-api.us-west-2.amazonaws.com/serverless/users/verifyEmail?id","",{ headers: {
        'x-auth-token': token
    }})
        .then(function (response) {
            alert('User verified successfully');
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            alert('User is not verified.. Please verify email!!');
        });
}

/**
 * @param {*} username is the user email id
 * @param {*} password is the password of user for login to the dashboard
 * @description This method is posted after the user email verification is done
 */
function userLogin(username, password) {
    axios.post('https://4pnr7j9868.execute-api.us-west-2.amazonaws.com/serverless/users/login',
        {
            userEmail: username,
            userPassword: password
        })
        .then(function (response) {
            console.log("response in services at front====",response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            window.location.href = 'dashboard'
        })
        .catch(function (err) {
            console.log(err);
            alert('Login Unsuccessful.. Please Try Again!!');
        });
}

/**
 * @param {*} username is the email of user to whom reset password link is to be send
 * @description This axios is posted to verifyUserEmail to send reset password link 
 *              to the verified user only
 */
function forgetPassword(username) {
    axios.post('/verifyUser',
    {
        'email': username,
    })
    .then(function (response) {
        // console.log('53--Inside forgetPassword response is--',response.data);
        // const token1 = response.data;
        // const token2 = token1.substring(34)
        // localStorage.setItem('verifyUserToken', token2);
        alert('Password change link is send to valid email plz check..')
    })
    .catch(function (err) {
        console.log(err);
        alert('User Not Found..');
    });
}

/**
 * @param {*} password new password to user account
 * @param {*} token is token to verify whether verified user has clicked on reset password link or not
 */
function resetPassword(password,token) {
    console.log('83--inside reset paswd password--',password);
    console.log('84--inside reset paswd token--',token);
    
    axios.post(`/resetpassword/${token}`,{'password': password},{
     headers: {
        'token': token
    }})
    .then(function (response) {
        alert('Password changed successfully');
            window.location.href = '/login'
    })
    .catch(function (err) {
        console.log(err);
        alert('Password change Unsuccessful.. Please Try Again!!');
    });
}

export { userRegister, userLogin, forgetPassword, checkToken, resetPassword }