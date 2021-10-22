import React from "react";
import { useHistory } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getRedirectResult,
} from "firebase/auth";
import firebaseConfig from "../../services/firebaseConfig";

import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import "./styles.css";

const firebaseApp = initializeApp(firebaseConfig);

const USER_TEST = {
  email: "email",
  password: "jQENpK4THZvXq5t",
};

export default function Page(props) {
  const history = useHistory();

  const [user, setUser] = React.useState(null);

  const auth = getAuth();

  React.useEffect(() => {
    signInWithEmailAndPassword(auth, USER_TEST.email, USER_TEST.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     setUser(null);
  //   }
  // });

  return (
    <div className="schedule">
      <div
        className="modal-fullscreen-background"
        onClick={() => history.push("/")}
      ></div>

      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="ADMINISTRATIVO"
          onClick={() => history.push("/")}
        />

        {JSON.stringify(user)}

        <Footer />
      </div>
    </div>
  );
}
