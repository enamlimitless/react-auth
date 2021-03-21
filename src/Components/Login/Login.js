import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSingIn: false,
        name: '',
        email: '',
        password: '',
        err: ''
    })

    const handleWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                /** @type {firebase.auth.OAuthCredential} */
                const {displayName, email} = res.user || {};
                const singInUser = {name: displayName, email}
                setLoggedInUser(singInUser)
                history.replace(from);
                // var credential = res.credential;
                // var token = credential.accessToken;
                var user = res.user;
                console.log(email)
            }).catch((err) => {
                var errCode = err.code;
                var errMessage = err.message;
                var email = err.email;
                // var credential = err.credential;
                console.log(errCode, errMessage, email)
            });
    }


    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'name') {
             isValid = e.target.value.length > 4;
        } else if (e.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
        } else if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPassValid = /\d{1}/.test(e.target.value);
            isValid = isPasswordValid && isPassValid;
        }
        if (isValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
            console.log(user.email,user.name,user.password)
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user}
                    newUserInfo.err = '';
                    console.log(res)
                })
                .catch(err => {
                    const newUserInfo = {...user}
                    newUserInfo.err = err.message
                    setUser(newUserInfo)
                    // var errCode = err.code;
                    // var errMessage = err.message;
                    // console.log(errCode,errMessage)
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wrap">
                        <form onSubmit={handleSubmit}>
                            <h3>Create an account</h3>
                            <input onBlur={handleBlur} className="form-control" type="text" name="name" placeholder="Name" required/>
                            <input onBlur={handleBlur} className="form-control my-4" type="email" name="email" placeholder="Username or Email" required/>
                            <input onBlur={handleBlur} className="form-control my-3" type="password" name="password" placeholder="Password" required/>
                            {/* <input onBlur={handleBlur} className="form-control my-4" type="password" name="confirmPassword" placeholder="Confirm Password" /> */}
                            <input className="form-control bg-warning" type="submit" value="Create An Account"/>
                            {/* <label htmlFor="">Already have an account? <a href="https://facebook.com">Login</a></label> */}
                        </form>
                    <p className="mt-3 text-danger">{user.err}</p>
                        <button onClick={handleWithGoogle}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;