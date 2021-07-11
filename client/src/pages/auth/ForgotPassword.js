import React, { useState } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

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
