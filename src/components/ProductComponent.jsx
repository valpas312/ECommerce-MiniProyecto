import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductCard, ProductsContainer, LinkStyled } from './Styled-Components/ProductComponentStyled'
import { addToCart } from '../redux/actions/cartActions'

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  
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
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </ProductCard>
      )
    })
    }
  </ProductsContainer>
  )
}

export default ProductComponent