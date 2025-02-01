import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/config";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/Search Page/SearchPage";
import ShoppingCart from "./pages/Shopping Cart/ShoppingCart";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import ExploreProducts from "./pages/Explore Products/ExploreProducts";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); //gerencia o carregamento inicial

  useEffect(() => {
    //escuta mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); //usuario autenticado
      } else {
        setIsAuthenticated(false); //usuario não autenticado
      }
      setLoading(false); //carregamento completo
    });

    return () => unsubscribe(); //remove o listener qnd desmontar o componente
  }, []);

  if (loading) {
    //mostra um estado de carregamento enquanto o listener verifica a autenticação
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/*tela de login*/}
        <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/*redirecionando para tela de login*/}
        <Route path="*" element={<Navigate to="/login" replace />} />

        {/*tela home*/}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/*tela search*/}
        <Route
          path="/search-page"
          element={
            isAuthenticated ? (
              <SearchPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/*tela shopping cart*/}
        <Route path="/shopping-cart" element={<ShoppingCart />} />

        <Route path="/product-detail/:id" element={<ProductDetail />} />

        {/*detalhes do produto */}
        <Route path="/explore-products" element={<ExploreProducts />} />

      </Routes>
    </Router>
  );
};

export default App;
