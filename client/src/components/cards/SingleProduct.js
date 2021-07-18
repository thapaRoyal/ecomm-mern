import React from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";

const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
  const { title, images, description, _id } = product;

  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images &&
              images.map((i) => <img alt="" src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card
            cover={<img src={Laptop} className="mb-3 card-image" alt="" />}
          ></Card>
        )}

        <Tabs type="card" key="1">
          <TabPane tab="Description">{description && description}</TabPane>
          <TabPane tab="More" key="2">
            Call us on XXX XXX XXX XXX for more information.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>
        <StarRating
          name={_id}
          numberOfStars={5}
          rating={4}
          changeRating={(newRating, name) =>
            console.log("New Rating ", newRating, "name", name)
          }
          isSelectable={true}
          starRatedColor="red"
        />
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
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
