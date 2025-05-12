import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";  

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsuario({
          nome: decoded.nome,
          isAdm: decoded.isAdmin, 
          id: decoded.sub,
          email: decoded.email,
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        setUsuario(null);
      }
    }
  }, []); 

  const logout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
    navigate("/login"); 
  };

  return (
    <AuthContext.Provider value={{ usuario, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
