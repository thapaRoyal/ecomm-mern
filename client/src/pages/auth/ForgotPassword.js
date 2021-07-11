import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const ForgotPassword = ({ history }) => {
  // state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //   takng current state from store and updating state
  const { user } = useSelector((state) => ({ ...state }));

  // redirecting user to homepage
  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  //   handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // redirecting user to the app after clicking the link
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    // try catch block
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    //   forgot password form
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? <LoadingOutlined /> : <h4>Forgot Password ?</h4>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          autoFocus
        />
        <br />
        <button className="btn btn-raised" disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
