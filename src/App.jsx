import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
import Cart from "./components/Cart";
import { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              token == null ? (
                <Login token={token} setToken={setToken} />
              ) : (
                <ProductListing />
              )
            }
          />
          <Route
            path="/product/:productId"
            element={
              token == null ? (
                <Login token={token} setToken={setToken} />
              ) : (
                <ProductDetail />
              )
            }
          />
          <Route
            path="/category/:categoryID"
            element={
              token == null ? (
                <Login token={token} setToken={setToken} />
              ) : (
                <Category />
              )
            }
          />
          <Route
            path="/cart"
            element={
              token == null ? (
                <Login token={token} setToken={setToken} />
              ) : (
                <Cart />
              )
            }
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
