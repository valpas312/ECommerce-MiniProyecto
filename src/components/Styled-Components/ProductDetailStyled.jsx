import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  img {
    width: 20rem;
    object-fit: contain;
  }

  .product__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    .product__title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .product__price {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .product__rating {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      .product__rating__star {
        color: #f0c14b;
      }
    }
    .product__description {
      margin-bottom: 1rem;
    }
  }
`;
