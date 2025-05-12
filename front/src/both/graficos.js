import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const QuestionarioGrafico = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/questionario')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const prepararDados = () => {
    const gravidadeData = {
      labels: ['Leve', 'Moderado', 'Grave'],
      datasets: [
        {
          label: 'Distribuição de Gravidade',
          data: [
            dados.filter(q => q.gravidade === 'Leve').length,
            dados.filter(q => q.gravidade === 'Moderado').length,
            dados.filter(q => q.gravidade === 'Grave').length,
          ],
          backgroundColor: 'rgba(75,192,192,0.2)', 
          borderColor: 'rgba(75,192,192,1)', 
          borderWidth: 1,
        },
      ],
    };
    return gravidadeData;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center m-20 dark:text-white">Gráfico de Gravidade</h2>
      <div className="w-full text-black sm:w-96 md:w-120 lg:w-144 h-72 mx-auto m-10  dark:text-white"> 
        <Bar data={prepararDados()} />
      </div>
    </div>
  );
};

export default QuestionarioGrafico;
