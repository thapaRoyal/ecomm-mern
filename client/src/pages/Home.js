import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../functions/product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  });

  const loadAllProducts = () => {
    getProductsByCount(3).then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <div>
      <p>react home</p>
      {JSON.stringify(products)}
    </div>
  );
};

export default Home;
