import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderList,
  NavLinkStyled,
  Bars,
  BtnBars,
} from "./Styled-Components/HeaderStyled";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

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

  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <HeaderList className={clicked ? "active" : ""}>
        {categories.map((category, index) => {
          return (
            <NavLinkStyled to={`/category/${category}`} key={index}>
              <li onClick={handleclick}>{category}</li>
            </NavLinkStyled>
          );
        })}
        {token == null ? (
          <NavLinkStyled to="/login" style={{ listStyle: "none" }}>
            <li>Login</li>
          </NavLinkStyled>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        <NavLinkStyled to={token == null ? "/login" : "/cart"}>
          <li onClick={handleclick}>
            <BsCartFill />
          </li>
        </NavLinkStyled>
      </HeaderList>
      <BtnBars onClick={handleclick}>
        <Bars />
      </BtnBars>
    </HeaderContainer>
  );
};

export default Header;
