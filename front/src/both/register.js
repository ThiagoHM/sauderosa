import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/usuario', form); 
      alert('Usuário cadastrado com sucesso!');
      setForm({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        telefone: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: '',
      });
    } catch (err) {
        if (err.response) {
          console.error('Erro no backend:', err.response.data);
          alert(`Erro: ${err.response.data.message || 'Erro ao cadastrar usuário'}`);
        } else {
          alert('Erro ao conectar com o servidor.');
          console.error(err);
        }
      }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 text-white">
      <div className="bg-gray-600 shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Cadastre-Se</h2>
  
        <div className="grid grid-cols-2 gap-4">
          {[
            'nome',
            'sobrenome',
            'email',
            'senha',
            'telefone',
            'cep',
            'rua',
            'bairro',
            'numero',
          ].map((field) => (
            <div
              key={field}
              className={`${
                field === 'numero' ? 'col-span-2' : 'col-span-2 sm:col-span-1'
              }`}
            >
              <label className="block text-sm font-medium mb-1 capitalize text-white">
                {field}
              </label>
              <input
                type={field === 'senha' ? 'password' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
  
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
  
        <p className="text-sm mt-4 text-center text-white">
          Já possui uma conta?{' '}
          <Link to="/login" className="text-blue-200 hover:underline font-semibold">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
  
  
}
export default Register;
