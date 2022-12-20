import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderList, NavLinkStyled } from "./Styled-Components/HeaderStyled";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsCartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

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
      <HeaderList className="open">
        {categories.map((category, index) => {
          return (
            <NavLinkStyled to={`/category/${category}`} key={index}>
              <li>{category}</li>
            </NavLinkStyled>
          );
        })}
        <NavLinkStyled to="/cart">
          <li><BsCartFill/></li>
        </NavLinkStyled>
      </HeaderList>
      <FaBars style={{cursor: 'pointer'}} onClick={{}}/>
    </HeaderContainer>
  );
};

export default Header;
