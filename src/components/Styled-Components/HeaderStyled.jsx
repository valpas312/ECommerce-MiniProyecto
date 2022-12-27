import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;

  li {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #f1f1f1;
      background-color: #333;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;

    &.active {
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: -45px;
      top: 7.2vh;
      background-color: #f1f1f1;
      height: 100vh;
      gap: 3rem;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;

  &.active {
    color: #f1f1f1;
    background-color: #333;
    padding: 0.5rem;
    border-radius: 5px;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 30px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const BtnBars = styled.button`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
