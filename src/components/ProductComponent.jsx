import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductCard,
  ProductsContainer,
  LinkStyled,
} from "./Styled-Components/ProductComponentStyled";
import { addToCart } from "../redux/actions/cartActions";

const ProductComponent = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
      <ProductsContainer>
        {products.map((product) => {
          const { id, title, image, price, category } = product;
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
                Add to Cart
              </button>
            </ProductCard>
          );
        })}
      </ProductsContainer>
    </>
  );
};

export default ProductComponent;
