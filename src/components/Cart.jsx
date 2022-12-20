import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { CartContainer } from "./Styled-Components/CartStyled";
import {
  ProductCard,
  ProductsContainer,
} from "./Styled-Components/ProductComponentStyled";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    setTotalPrice(totalPrice - (product.price * product.quantity));
    setTotalQuantity(totalQuantity - product.quantity);
  };
  return (<>
    {
      cart.length === 0 ? <h1 style={{marginTop: '15vh'}}>Cart is empty</h1> : 
    <CartContainer>
      <ProductsContainer>
        {cart.map((product) => {
          const { id, title, image, price, category, quantity } = product;
          return (
            <ProductCard key={id}>
              <img src={image} alt={title} />
              <div>{title}</div>
              <div>${(price * quantity).toFixed(2)}</div>
              <div>{category}</div>
              <div>Quantity:{quantity}</div>
              <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
            </ProductCard>
          );
        })}
      </ProductsContainer>
      <h2>
        Total:$
        {cart
          .map((product) => {
            const { price, quantity } = product;
            return price * quantity;
          })
          .reduce((a, b) => a + b)
          .toFixed(2)}
      </h2>
    </CartContainer>
    }
  </>
  );
};

export default Cart;