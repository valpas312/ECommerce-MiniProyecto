import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { ProductDetailContainer } from './Styled-Components/ProductDetailStyled'

const ProductDetail = () => {
  const { productId } = useParams()
  const product = useSelector(state => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useDispatch()

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => console.log('Error: ', err))
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail()
    return () => {
      dispatch(removeSelectedProduct())
    }
  } , [productId])
  return (<>
    {Object.keys(product).length === 0 ? (
      <h1 style={{marginTop: '15vh' }}>Loading...</h1>
    ) : (
      <ProductDetailContainer>
        <img src={image} alt={title} />
        <div>{title}</div>
        <div>${price}</div>
        <div>{category}</div>
        <div>{description}</div>
      </ProductDetailContainer>
    )}
  </>
  )
}

export default ProductDetail