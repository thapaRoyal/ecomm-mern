import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../functions/product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import { LoadingOutlined } from "@ant-design/icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">Search / filter menu</div>
        <div className="col-md-9">
          {loading ? (
            <LoadingOutlined className="h1" />
          ) : (
            <h4 className="text-primary">All Products</h4>
          )}
          {products.length < 1 && <p>No Products found</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div className="col-md-4 mt-3" key={p._id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
