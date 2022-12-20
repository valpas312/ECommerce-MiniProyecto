import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductCard, ProductsContainer, LinkStyled } from './Styled-Components/ProductComponentStyled'


const Category = () => {
    const { categoryID } = useParams()
    
    const [categories, setCategories] = useState([])

    const fetchCategory = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryID}`)
        .catch(err => console.log('Error: ', err))
        setCategories(response.data)
    }

    useEffect(() => {
        if (categoryID && categoryID !== '') fetchCategory()
        return  () => {
            setCategories([])
        }
    } , [categoryID])

  return (<>
  {
    categories.length === 0 ? <h1 style={{marginTop: '15vh'}}>Loading...</h1> : <ProductsContainer>
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
  }
  
  </>
  )
}

export default Category