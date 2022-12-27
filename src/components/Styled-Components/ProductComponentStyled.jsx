import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15vh;
`;

export const ProductCard = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.02);
  }

  img {
    width: 7rem;
  }

  @media screen and (max-width: 768px) {
    :hover {
      transform: none;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.1rem;
  font-weight: 400;
`;
