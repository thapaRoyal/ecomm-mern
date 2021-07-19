import React from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Laptop from "../../images/laptop.png";

const SideDrawer = ({ children }) => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  return <Drawer visible={true}>{JSON.stringify(cart)}</Drawer>;
};

export default SideDrawer;
