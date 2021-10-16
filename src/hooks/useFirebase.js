import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import {getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile,
       sendEmailVerification ,createUserWithEmailAndPassword ,sendPasswordResetEmail ,signOut ,onAuthStateChanged } 
        from "firebase/auth";


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
const [loading, setLoading] = useState(true)


// Google signIn handler function.
const handleGoogleSignIn = (e) => {

    // console.log("i am clicked");
    // e.preventDefault();
    // signInWithPopup(auth, googleProvider)
    // .then((result) => {
    //   // history.push(redirect_uri);

    //     // destructuring user data.
    //     const { displayName, email, photoURL } = result.user;
    //     const loggedInUser = {
    //         name: displayName,
    //         email: email,
    //         photo: photoURL
    // };
    // setUser(loggedInUser);
    // setMessage("Successfully logged in!");
    // setError("");

  // })
  //   .catch(error => {
  //       console.log(error.message);
  //   })
  return signInWithPopup(auth, googleProvider)
            
            .finally(() => { setLoading(false) });
  };

  
// const Github signIn handler function.
const GithubSignInHandler = (e) => {
  e.preventDefault();
  signInWithPopup(auth, githubProvider)
      .then(result =>  {
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
}

// getting name
const handleNameChange = e => {
  setName(e.target.value);
}
// getting email and password from user input data
const handleEmailChange = e => {
  setEmail(e.target.value);
  console.log(e.target.value);
  }

const handlePasswordChange = e => {
  setPassword(e.target.value)
  console.log(e.target.value);
}
// login functionality for registered user accounts
const processLogin = (e) => {
  e.preventDefault()
  console.log("login processing.... ");
  signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const { displayName, email, photoURL } = result.user;
      const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
  }
      setUser(loggedInUser);
      console.log(loggedInUser)
      setMessage("Successfully logged in!");
      setError("");
    })
    .catch(error => {
      setError(error.message);
      setMessage("")
    })
}

// update username function
const setUserName = () => {
  updateProfile(auth.currentUser, { displayName: name })
    .then(result => { })
}
// verification email send
const verifyEmail = () => {
sendEmailVerification(auth.currentUser)
  .then(result => {
  console.log(result);
  })
}
// handling new register user by giving name, email and password
const handleRegistration = e => {
  // ignoring default reload method of form tag
  e.preventDefault();
  // validating password length.
  if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
      }
  if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
  return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
      const user = result.user; 
      console.log(user);
      verifyEmail() 
      setUserName()
})
}
// password reset function 
const handleResetPassword = () => {
  sendPasswordResetEmail(auth, email)
    .then(result => { })
}
// logout functionality
const logout = () => {
signOut(auth)
    .then(() => {
        setUser({});
    })
}
// set user when user logged in. this is firebase default behavior that firebase can save the user if logged in.
// observe whether user auth state changed or not
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
      }
      else {
          setUser({});
      }
      setLoading(false);
  });
  return () => unsubscribe;
}, [])


    return {
            user,
            password,
            email,
            name, 
            error, message,
            handleGoogleSignIn,
            GithubSignInHandler,
            handleResetPassword, 
            processLogin,
            handleEmailChange,
            handlePasswordChange,
            handleRegistration,
            handleNameChange, logout
        }
}

export default useFirebase;