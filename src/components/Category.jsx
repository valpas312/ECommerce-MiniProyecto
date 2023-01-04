import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  ProductCard,
  ProductsContainer,
  LinkStyled,
} from "./Styled-Components/ProductComponentStyled";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Category = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  const dispatch = useDispatch();

  const { categoryID } = useParams();

  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${categoryID}`)
      .catch((err) => console.log("Error: ", err));
    setCategories(response.data);
  };

  useEffect(() => {
    if (categoryID && categoryID !== "") fetchCategory();
    return () => {
      setCategories([]);
    };
  }, [categoryID]);

  return (
    <>
      {token == null ? (
        <div style={{ marginTop: "15vh", textAlign: "center" }}>
          <h1>You must be logged in to add items to your cart</h1>
          <h2>
            Click <LinkStyled to={"/login"}>here</LinkStyled> to login
          </h2>
        </div>
      ) : null}
      {categories.length === 0 ? (
        <h1 style={{ marginTop: "15vh" }}>Loading...</h1>
      ) : (
        <ProductsContainer>
          {categories.map((product) => {
            const { id, title, image, price, category } = product;
            const handleAddToCart = (product) => {
              dispatch(addToCart(product));
              alert(`${title} added to cart`);
            };
            return (
              <ProductCard key={id}>
                <LinkStyled to={`/product/${id}`}>
                  <img src={image} alt={title} />
                  <div>
                    <div>{title}</div>
                    <div>${price}</div>
                    <div>{category}</div>
                  </div>
                </LinkStyled>
                <button
                  disabled={token == null ? true : false}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </ProductCard>
            );
          })}
        </ProductsContainer>
      )}
    </>
  );
};

export default Category;
