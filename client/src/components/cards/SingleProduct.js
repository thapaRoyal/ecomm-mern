import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const SingleProduct = ({ product }) => {
  const { title, description, images, slug } = product;

  return (
    <>
      <div className="col-md-7">image Carousel</div>
      <div className="col-md-5">
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className="text-success" /> Add to cart
            </>,

            <Link to="/">
              <HeartOutlined className="text-info" />
              <br />
              Add to wishlist
            </Link>,
          ]}
        >
          <Meta title={title} description={description} />
          <p>Price/category/subs/shipping/color/brand /qty availabla/ sold</p>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
