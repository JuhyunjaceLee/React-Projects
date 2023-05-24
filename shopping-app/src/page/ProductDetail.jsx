import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [item, setItem] = useState(null);
  const param = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${param.id}`;
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <h1>{item?.title}</h1>
    </div>
  );
}
