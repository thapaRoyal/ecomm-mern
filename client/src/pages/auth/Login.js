import React, { useEffect, useState } from "react";

import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import {
  GoogleOutlined,
  LoadingOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //  taking current state from store and returing new state
  const { user } = useSelector((state) => ({ ...state }));

  // redirecting user to homepage
  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  //dispatch an action to store
  let dispatch = useDispatch();

  // handle submit function || login with email and password function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // try catch block
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      toast.success("Logged in successfully");

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  // google login function
  const googleLogin = async (e) => {
    e.preventDefault();

    // try catch block
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      toast.success("Logged in successfully");

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // login form
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email and Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? <LoadingOutlined /> : <h4>Login</h4>}
          {loginForm()}

          <Button
            onClick={googleLogin}
            type="danger"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>
          <Link to="/forgot/password" className="float-right text-danger mt-2">
            Forgot password ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
