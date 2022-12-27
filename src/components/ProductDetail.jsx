import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { ProductDetailContainer } from "./Styled-Components/ProductDetailStyled";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error: ", err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <h1 style={{ marginTop: "15vh" }}>Loading...</h1>
      ) : (
        <ProductDetailContainer>
          <img src={image} alt={title} />
          <div>{title}</div>
          <div>${price}</div>
          <div>{category}</div>
          <div>{description}</div>
          <button
            disabled={token == null ? true : false}
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </button>
        </ProductDetailContainer>
      )}
      {token == null ? (
        <div style={{ marginTop: "15vh", textAlign: "center" }}>
          <h1>You must be logged in to add items to your cart</h1>
          <h2>
            Click <a href="/login">here</a> to login
          </h2>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetail;
