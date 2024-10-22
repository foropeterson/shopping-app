import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const { productId } = match.params;

  useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;
