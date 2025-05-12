import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './authcontext';  

const UsuariosPorGravidade = () => {
  const [usuarios, setUsuarios] = useState([]);
  const { usuario } = useAuth();  

  useEffect(() => {
    
    if (usuario) {
      axios.get('http://localhost:4000/questionario/usuarios-por-gravidade', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,  
        },
      })
        .then(response => {
          
          const usuariosOrdenados = response.data.sort((a, b) => {
            const gravidadeOrder = { Grave: 3, Moderado: 2, Leve: 1 };
            return gravidadeOrder[b.gravidade] - gravidadeOrder[a.gravidade];
          });
          setUsuarios(usuariosOrdenados);
        })
        .catch(error => {
          console.error("Erro ao buscar usuários:", error);
        });
    }
  }, [usuario]);  

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Usuários por Gravidade</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Telefone</th>
              <th className="px-4 py-2 text-left">Gravidade</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{user.nome}</td>
                <td className="px-4 py-2">{user.telefone}</td>
                <td className={`px-4 py-2 font-semibold ${
                  user.gravidade === 'Grave' ? 'text-red-600' :
                  user.gravidade === 'Moderado' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {user.gravidade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsuariosPorGravidade;
