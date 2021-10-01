import React, { useContext } from "react";
import firebase from "./firebaseConfig";
import { getAuth, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory(); // react-router documentation
  const location = useLocation(); // react-router documentation
  let { from } = location.state || { from: { pathname: "/" } }; // react-router documentation

  const provider = new firebase.auth.GoogleAuthProvider(); // firebase

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from); // react-router documentation
        console.log(signedInUser);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <p>{loggedInUser.name}</p>
      <p>{loggedInUser.email}</p>
    </div>
  );
};

export default Login;
