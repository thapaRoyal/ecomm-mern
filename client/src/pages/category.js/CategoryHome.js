import React, { useState, useEffect } from "react";
import { getCategories, getCategory } from "../../functions/category";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";

const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((c) => {
      console.log(JSON.stringify(c.data, null,4));
      setCategory(c.data);
    });
  }, []);

  return <div>{match.params.slug}</div>;
};

export default CategoryHome;
