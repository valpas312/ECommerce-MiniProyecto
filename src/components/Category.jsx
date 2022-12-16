import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductCard, ProductsContainer, LinkStyled } from './Styled-Components/ProductComponentStyled'


const Category = () => {
    const { categoryID } = useParams()
    console.log(categoryID)
    
    const [categories, setCategories] = useState([])

    const fetchCategory = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryID}`)
        .catch(err => console.log('Error: ', err))
        console.log(response.data)
        setCategories(response.data)
    }

    useEffect(() => {
        if (categoryID && categoryID !== '') fetchCategory()
        return  () => {
            setCategories([])
        }
    } , [categoryID])

  return (<>

  <ProductsContainer>
    {categories.map(product => {
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
  </>
  )
}

export default Category