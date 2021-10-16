import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import {getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from "firebase/auth";


initializeAuthentication()
const auth = getAuth();
// auth provider object. We can give any name for this object.
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = () => {

    // use State method for loggedInUser
const [user, setUser] = useState({})
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [message, setMessage] = useState('');

// Google signIn handler function.
const handleGoogleSignIn = (e) => {
    console.log("i am clicked");
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        // destructuring user data.
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
            name: displayName,
            email: email,
            photo: photoURL
    };
    setUser(loggedInUser);
    setMessage("Successfully logged in!");
    setError("");

  })
    .catch(error => {
        console.log(error.message);
    })
  };


    return {
            user,
            password,
            email,
            name, 
            error, message,
            handleGoogleSignIn
        }
}

export default useFirebase;