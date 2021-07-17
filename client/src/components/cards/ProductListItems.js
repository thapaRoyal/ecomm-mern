import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, shipping, color, sold, quantity, brand } =
    product;
  return (
    <ul classname="list-group">
      <li className="list-group-item">
        price{" "}
        <span className="label label-default label-pull pull-xs-right">
          $ {price}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pull pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pull pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Shipping{" "}
        <span className="label label-default label-pull pull-xs-right">
          {shipping}
        </span>
      </li>

      <li className="list-group-item">
        Color{" "}
        <span className="label label-default label-pull pull-xs-right">
          {color}
        </span>
      </li>

      <li className="list-group-item">
        Brand{" "}
        <span className="label label-default label-pull pull-xs-right">
          {brand}
        </span>
      </li>

      <li className="list-group-item">
        Available{" "}
        <span className="label label-default label-pull pull-xs-right">
          {quantity}
        </span>
      </li>

      <li className="list-group-item">
        Sold{" "}
        <span className="label label-default label-pull pull-xs-right">
          {sold}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
