import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  // state
  const [email, setEmail] = useState("");

  //  taking current state from store and returing new state
  const { user } = useSelector((state) => ({ ...state }));

  // redirecting user to homepage
  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    //redirecting user to app after the clicking the registration link
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);

    // toast notification
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );

    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);

    // clear state
    setEmail("");
  };

  // regster form
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        placeholder="Enter your email"
      />

      <button type="submit" className="btn btn-raised mt-3">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
