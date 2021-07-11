import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //   get email from localStorage
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation

    if (!email || !password) {
      toast.error("Email and password are required !");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be of at least 6 characters");
      return;
    }

    // try catch block
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        //   remove user email from local storage
        window.localStorage.removeItem("emailForRegistration");

        // get user id token , user and update password
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store

        // redirect
        history.push("/");
        toast.success("Registered successfully");
      }
    } catch (error) {
      //   toast.error(error.message);
    }
  };

  // register complete form
  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <br />
      <input type="email" className="form-control" value={email} disabled />

      <br />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />

      <button type="submit" className="btn btn-raised mt-3">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Registration</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
