import React from 'react'
import Header from './components/Header'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import Category from './components/Category'

const App = () => {
  return (<>
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/category/:categoryID" element={<Category/>}/>
        <Route path="*" element={<div>Error 404</div>}/>
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App