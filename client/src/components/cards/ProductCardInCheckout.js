import React from "react";
import ModalImage from "react-modal-image";
import { useDispatch } from "react-redux";
import Laptop from "../../images/laptop.png";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ProductCardInCheckout = ({ p }) => {
  const dispatch = useDispatch();

  const colors = ["Black", "White", "Brown", "Silver", "Blue"];

  const handleColorChange = (e) => {
    // console.log("COLOR CHANGED", e.target.value);

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });
      console.log("CART UPDATE COLOR", cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  // handle qty changes
  const handleQuantityChange = (e) => {
    // console.log("AVAILABLE QUANTITY", p.quantity);

    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity:  ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].count = count;
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        dispatch({
          type: "ADD_TO_CART",
          payload: cart,
        });
      });
    }
  };

  // handle remove

  const handleRemove = () => {
    // console.log(p._id, "PRODUCT TO REMOVE");

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        dispatch({
          type: "ADD_TO_CART",
          payload: cart,
        });
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div
            style={{
              width: "100px",
              height: "auto",
            }}
          >
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={Laptop} large={Laptop} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>$ {p.price}</td>
        <td>{p.brand}</td>
        <td>
          <select
            name="color"
            onChange={handleColorChange}
            className="form-control"
          >
            {p.color ? (
              <option value={p.color}>{p.color}</option>
            ) : (
              <option>Select</option>
            )}
            {colors
              .filter((c) => c !== p.color)
              .map((c) => (
                <option value={c} key={c}>
                  {c}
                </option>
              ))}
          </select>
        </td>
        <td className="text-center">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
