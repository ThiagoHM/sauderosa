import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../adm/authcontext"; 

const Rating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [comment, setComment] = useState("");
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);

  const { usuario } = useAuth();
  const usuarioId = usuario ? usuario.id : null; 

  const handleStarClick = (star) => {
    setCurrentRating(star);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (currentRating === 0 || comment.trim() === "") {
      alert("Por favor, dê uma nota e escreva um comentário.");
      return;
    }

    if (!usuarioId) {
      alert("Usuário não autenticado.");
      return;
    }

    try {
      await axios.post("http://localhost:4000/avaliacao", {
        texto: comment,
        nota: currentRating,
        usuarioId: usuarioId,  
      });

      setThankYouMessageVisible(true);
      setTimeout(() => setThankYouMessageVisible(false), 3000);

      setCurrentRating(0);
      setComment("");
    } catch (error) {
      console.error("Erro ao enviar avaliação:", error);
      alert("Erro ao enviar a avaliação, tente novamente mais tarde.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="text-center text-black dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Deixe sua opinião</h1>

        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-10 h-10 cursor-pointer ${star <= currentRating ? "fill-current text-yellow-500" : "text-gray-400"}`}
              onClick={() => handleStarClick(star)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div>

        <p id="rating-text" className="mb-4 text-lg font-semibold">
          Avaliação: {currentRating} estrelas
        </p>

        <div className="mb-4">
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className="w-full sm:w-3/4 lg:w-1/2 p-2 border border-gray-300 rounded-md dark:text-black"
            rows="4"
            placeholder="Deixe um comentário sobre o site..."
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Enviar Avaliação
        </button>

        {thankYouMessageVisible && (
          <p id="thank-you-message" className="mt-4 text-lg font-semibold text-green-500">
            Obrigado pela sua avaliação!
          </p>
        )}
      </div>
    </div>
  );
};

export default Rating;
