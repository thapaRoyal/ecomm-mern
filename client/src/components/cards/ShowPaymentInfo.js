import React from "react";

const ShowPaymentInfo = ({ order }) => (
  <div>
    <p>
      <span className="badge bg-secondary">
        Order Id: {order.paymentIntent.id}
      </span>
      <br />
      <span className="badge bg-secondary">
        Amount: {(order.paymentIntent.amount /= 100).toLocaleString("en-US")}
      </span>
      /
      <span className="badge bg-info">
        Currency : {order.paymentIntent.currency.toUpperCase()}
      </span>
      <br />
      <span className="badge bg-success">
        Method : {order.paymentIntent.payment_method_types[0]}
      </span>
      /
      <span className="badge bg-warning">
        Payment : {order.paymentIntent.status.toUpperCase()}
      </span>
      <br />
      <span className="badge bg-info">
        Ordered on:
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      <span className="badge bg-primary">Status: {order.orderStatus}</span>
    </p>
  </div>
);

export default ShowPaymentInfo;
