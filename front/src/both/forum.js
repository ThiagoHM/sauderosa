import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000/comentarios';

const Forum = () => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setUsuario(null);
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/auth/verificar-token', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.data?.user) {
          setUsuario(response.data.user);
        } else {
          throw new Error('Resposta inválida do servidor');
        }
      } catch (error) {
        console.error('Falha na verificação do token:', error);
        localStorage.removeItem('token');
        setUsuario(null);
        setErro('Sessão expirada. Faça login novamente.');
      }
    };

    verificarAutenticacao();
  }, []);

  const fetchComentarios = async () => {
    setCarregando(true);
    setErro('');
    
    try {
      const response = await axios.get(API_URL);
      setComentarios(response.data || []);
    } catch (error) {
      console.error('Erro ao buscar comentários:', error);
      setErro(error.response?.data?.message || 'Erro ao carregar comentários');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    fetchComentarios();
  }, []);

  const enviarComentario = async () => {
    if (!novoComentario.trim()) {
      setErro('Digite um comentário antes de enviar');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token || !usuario) {
        throw new Error('Usuário não autenticado');
      }

      setCarregando(true);
      
      await axios.post(API_URL, { texto: novoComentario }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setNovoComentario('');
      await fetchComentarios();
    } catch (error) {
      console.error('Erro no comentário:', error);
      setErro(error.response?.data?.message || 'Falha ao enviar comentário');
    } finally {
      setCarregando(false);
    }
  };

  
  const enviarResposta = async (comentarioId, respostaTexto) => {
    if (!respostaTexto.trim()) {
      setErro('Digite uma resposta antes de enviar');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token || !usuario) {
        throw new Error('Usuário não autenticado');
      }

      await axios.post(`${API_URL}/${comentarioId}/respostas`, { 
        texto: respostaTexto 
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      await fetchComentarios();
    } catch (error) {
      console.error('Erro na resposta:', error);
      setErro(error.response?.data?.message || 'Falha ao enviar resposta');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Fórum</h1>
      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {erro}
        </div>
      )}

      <div className="mb-6">
        <textarea
          placeholder={usuario ? "Escreva um comentário..." : "Faça login para comentar"}
          value={novoComentario}
          onChange={(e) => {
            setNovoComentario(e.target.value);
            setErro('');
          }}
          className="w-full border px-3 py-2 mb-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows={4}
          disabled={!usuario}
        />
        
        {usuario && (
          <button
            onClick={enviarComentario}
            disabled={!novoComentario.trim() || carregando}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors ${(!novoComentario.trim() || carregando) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {carregando ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : 'Enviar Comentário'}
          </button>
        )}
      </div>

      {carregando && comentarios.length === 0 ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {comentarios.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Nenhum comentário encontrado</p>
          ) : (
            comentarios.map((comentario) => (
              <ComentarioItem
                key={comentario.id}
                comentario={comentario}
                onResponder={enviarResposta}
                usuarioLogado={!!usuario}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

function ComentarioItem({ comentario, onResponder, usuarioLogado }) {
  const [respostaTexto, setRespostaTexto] = useState('');
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [erroLocal, setErroLocal] = useState('');

  const handleEnviarResposta = async () => {
    if (!respostaTexto.trim()) {
      setErroLocal('Digite uma resposta válida');
      return;
    }

    try {
      await onResponder(comentario.id, respostaTexto);
      setRespostaTexto('');
      setMostrarResposta(false);
      setErroLocal('');
    } catch (error) {
      setErroLocal(error.message || 'Erro ao enviar resposta');
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            {comentario.usuario?.nome || 'Usuário desconhecido'}
          </p>
          <p className="text-xs text-gray-500 dark:text-white">
            {new Date(comentario.dataCriacao).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
      
      <p className="mt-2 text-gray-700 whitespace-pre-line dark:text-white">{comentario.texto}</p>

      {comentario.respostas && comentario.respostas.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800 dark:text-white">Respostas:</h4>
          <div className="space-y-4 mt-2">
            {comentario.respostas.map((resposta) => (
              <div key={resposta.id} className="border-t pt-2 dark:text-white">
                <p className="text-gray-600 dark:text-white">{resposta.texto}</p>
                <p className="text-xs text-gray-500 dark:text-white">
                  Respondido por {resposta.usuario?.nome || 'Usuário desconhecido'} em{' '}
                  {new Date(resposta.dataCriacao).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {usuarioLogado && (
        <div className="mt-3">
          <button
            onClick={() => {
              setMostrarResposta(!mostrarResposta);
              setErroLocal('');
            }}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            {mostrarResposta ? 'Cancelar' : 'Responder'}
          </button>

          {mostrarResposta && (
            <div className="mt-2 pl-4 border-l-2 border-gray-200">
              <textarea
                placeholder="Escreva sua resposta..."
                value={respostaTexto}
                onChange={(e) => {
                  setRespostaTexto(e.target.value);
                  setErroLocal('');
                }}
                className="w-full border rounded px-3 py-2 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
                rows={3}
              />
              
              {erroLocal && (
                <p className="text-red-500 text-sm mb-2">{erroLocal}</p>
              )}
              
              <div className="flex justify-end">
                <button
                  onClick={handleEnviarResposta}
                  disabled={!respostaTexto.trim()}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Responder
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Forum;
