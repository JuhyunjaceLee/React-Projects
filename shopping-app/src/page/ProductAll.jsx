import React, { useEffect, useState } from "react";
import SearchInput from "../component/SearchInput";
import ProductCard from "../component/ProductCard";

export default function ProductAll() {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product_contents">
      <SearchInput />
      <div className="productCard_wrap">
        {productsList.map((list, idx) => (
          <ProductCard list={list} key={idx} />
        ))}
      </div>
    </div>
  );
}
