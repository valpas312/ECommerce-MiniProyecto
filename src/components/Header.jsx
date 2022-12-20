import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderList, NavLinkStyled } from "./Styled-Components/HeaderStyled";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => console.log("Error: ", err));
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <HeaderList>
        {categories.map((category, index) => {
          return (
            <NavLinkStyled to={`/category/${category}`} key={index}>
              <li>{category}</li>
            </NavLinkStyled>
          );
        })}
        <NavLinkStyled to="/cart">
          <li>Cart</li>
        </NavLinkStyled>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
