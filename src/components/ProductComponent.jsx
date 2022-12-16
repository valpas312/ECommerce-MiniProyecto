import React from 'react'
import { useSelector } from 'react-redux'
import { ProductCard, ProductsContainer, LinkStyled } from './Styled-Components/ProductComponentStyled'

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products)
  return (<ProductsContainer>
    {products.map(product => {
      const {id, title, image, price, category} = product
      return (
            <ProductCard key={id}>
              <LinkStyled to={`/product/${id}`}>
                <img src={image} alt={title}/>
              <div>
                <div>{title}</div>
                <div>${price}</div>
                <div>{category}</div>
              </div>
              </LinkStyled>        
            </ProductCard>
      )
    })
    }
  </ProductsContainer>
  )
}

export default ProductComponent