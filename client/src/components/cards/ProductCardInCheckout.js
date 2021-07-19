import React from "react";
import ModalImage from "react-modal-image";
import Laptop from "../../images/laptop.png";

const ProductCardInCheckout = ({ p }) => {
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
        <td>{p.color}</td>
        <td>{p.count}</td>
        <td>Shipping</td>
        <td>Delete Icon</td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
