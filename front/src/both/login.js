import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErro('');
  
    try {
      const response = await axios.post('http://localhost:4000/auth/login', form);
      const { access_token, isAdmin } = response.data;
  
      localStorage.setItem('token', access_token);
      localStorage.setItem('isAdmin', isAdmin);
  
      alert('Login realizado com sucesso!');
      
      
      if (isAdmin) {
        window.location.href = '#';
      } else {
        window.location.href = '/home';
      }
  
    } catch (error) {
      console.error(error);
      setErro('Email ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-600 text-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>

        {erro && <p className="text-red-500 mb-4 text-center">{erro}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
        <p className="text-sm mt-4 text-center text-white">
          Não possui uma conta?{' '}
          <Link to="/register" className="text-blue-200 hover:underline font-semibold">
            Registrar-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
