import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/config";
import Login from "./components/Login";
import Home from "./components/Home";

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
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

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

        {/*redirecionando para tela de login*/}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
