import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  // redux
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  //   get total price
  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  //   save order to data base
  const saveOrderToDb = () => {
    dispatch({
      type: "COD",
      payload: true,
    });
    // alert("sav order to db");
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RESPONSE", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("CART SAVE ERR", err));
    history.push("/checkout");
  };

  //   save order to data base
  const saveCashOrderToDb = () => {
    // alert("sav order to db");
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RESPONSE", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("CART SAVE ERR", err));
    history.push("/checkout");
  };

  // show cart items
  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <h4 className="pl-2">Cart / {cart.length} Product</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue shopping</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, index) => (
            <div key={index}>
              <p>
                {c.title} X {c.count} =$ {c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>$ {getTotal()}</b>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
                Pay cash on delivery
              </button>
              <br />
              <button
                onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
                Proceed to checkout
              </button>
            </>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
