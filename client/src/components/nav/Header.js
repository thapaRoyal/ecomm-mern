import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import firebase from "firebase";

// destructuring
const { SubMenu, Item } = Menu;

// function
const Header = () => {
  // state
  const [current, setCurrent] = useState("home");

  //dispatch an action to store
  let dispatch = useDispatch();

  let history = useHistory();

  // get user from state
  let { user } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  // logout function
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    // Navbar
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home </Link>
      </Item>

      {user && (
        <SubMenu
          key="submenu"
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="ml-auto"
        >
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="ml-auto">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {!user && (
        <Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Item>
      )}
    </Menu>
  );
};

export default Header;
