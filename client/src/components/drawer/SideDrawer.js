import React from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Laptop from "../../images/laptop.png";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  const imageStyle = {
    width: "100%",
    height: "50px",
    objectFit: "cover",
  };

  return (
    <Drawer
      className="text-center"
      title={`Cart / ${cart.length} Product`}
      placement="right"
      onClose={() => {
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        });
      }}
      t
      visible={drawer}
    >
      {cart.map((p) => (
        <div className="row" key={p._id}>
          <div className="col">
            {p.images[0] ? (
              <>
                <img src={p.images[0].url} alt="" style={imageStyle} />
                <p className="text-center bg-secondary text-light">
                  {p.title} X {p.count}
                </p>
              </>
            ) : (
              <>
                <img src={Laptop} alt="" style={imageStyle} />
                <p className="text-center bg-secondary text-light">
                  {p.title} X {p.count}
                </p>
              </>
            )}
          </div>
        </div>
      ))}

      <Link to="/cart">
        <button
          onClick={() =>
            dispatch({
              type: "SET_VISIBLE",
              payload: false,
            })
          }
          className="text-center btn btn-primary btn-raised btn-block"
        >
          Go to cart
        </button>
      </Link>
    </Drawer>
  );
};

export default SideDrawer;
