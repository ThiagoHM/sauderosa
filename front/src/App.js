import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './both/home';
import Guide from './both/guide';
import Team from './both/team';
import Footer from './both/footer';
import Rating from './both/rating';
import Tratamento from './both/tratamento';
import Symptoms from './both/symptoms';
import Form from './user/form';
import Risks from './both/risks';
import Login from './both/login';
import Register from './both/register';
import Forum from './both/forum';
import { AuthProvider, useAuth } from './adm/authcontext';
import NavbarAdm from './adm/navbaradm';
import Navbar from './user/navbar';
import QuestionarioGrafico from './both/graficos';
import UsuariosPorGravidade from './adm/lista';

function LayoutWrapper() {
  const location = useLocation();
  const { usuario } = useAuth();

  const isCadastroOuLogin = location.pathname === '/register' || location.pathname === '/login';

  const renderNavbar = () => {
    if (!usuario) return null;
    return usuario.isAdm ? <NavbarAdm /> : <Navbar />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!isCadastroOuLogin && renderNavbar()}

      <div className="flex-grow bg-white dark:bg-gray-900">
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Guide />
                <Team />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/tratamento" element={<Tratamento />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Home />} />
          <Route path="/grafico" element={<QuestionarioGrafico />} />
          <Route path="/lista" element={<UsuariosPorGravidade />} />
        </Routes>
      </div>

      {!isCadastroOuLogin && <Footer />}
    </div>
  );
}

function App() {
  return (
    
      <BrowserRouter>
      <AuthProvider>
        <LayoutWrapper />
      </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
