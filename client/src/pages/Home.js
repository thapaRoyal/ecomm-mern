import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import ProductCard from "../components/cards/ProductCard";
import LoadingCard from "../components/cards/LoadingCard";
import { getProducts } from "../functions/product";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);

    // sort , order, limit
    getProducts("createdAt", "desc", 6).then((res) => {
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="jumbotron text-primary h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
        {/* {loading ? <LoadingOutlined className="h1" /> : <h4>All Products</h4>} */}
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />
    </>
  );
};

export default Home;
