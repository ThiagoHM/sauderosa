import React, { useState } from "react";
import logoform from "./assets/logoform.png"
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    idade: "",
    procedimento: "",
    tempo_operacao: "",
    tipo_cancer: "",
    tratamento_fisio: "",
    familia_cancer: "",
    recidiva: "",
    flexao_extensao: "",
    abducao_aducao: "",
    rotacao: "",
    abducao_horizontal: "",
    perda_forca: "",
    dor: 0,
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/api/formulario", formData);
      
      if (response.status === 201) {
        setMessage("Formulário enviado com sucesso!");
        setFormData({ 
          idade: "",
          procedimento: "",
          tempo_operacao: "",
          tipo_cancer: "",
          tratamento_fisio: "",
          familia_cancer: "",
          recidiva: "",
          flexao_extensao: "",
          abducao_aducao: "",
          rotacao: "",
          abducao_horizontal: "",
          perda_forca: "",
          dor: 0,
        });
      }
    } catch (error) {
      setMessage("Erro ao enviar o formulário. Tente novamente.");
      console.error("Erro no envio:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 text-black sm:p-6 shadow-md mt-10 mb-10 dark:text-white">
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <img src={logoform} alt="Logo Câncer de Mama" className="w-16 h-16 mb-4 md:mb-0 md:mr-4" />
        <h2 className="text-2xl font-bold text-black text-center dark:text-white">Formulário de Câncer de Mama</h2>
      </div>
  
      <form action="#" method="post" className="space-y-4 text-black dark:text-white">
        <div className="mb-4">
          <label htmlFor="idade" className="block mb-2 text-black dark:text-white">Qual sua idade?</label>
          <select
            id="idade"
            value={formData.idade}
            onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione sua faixa etária</option>
            <option value="18-24">18 a 24 anos</option>
            <option value="25-30">25 a 30 anos</option>
            <option value="acima-30">Acima de 30 anos</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="procedimento" className="block font-medium mb-2">Já realizou procedimento cirúrgico?</label>
          <select
            id="procedimento"
            value={formData.procedimento}
            onChange={(e) => setFormData({ ...formData, procedimento: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="tempo_operacao" className="block font-medium mb-2">Faz quanto tempo que operou?</label>
          <select
            id="tempo_operacao"
            value={formData.tempo_operacao}
            onChange={(e) => setFormData({ ...formData, tempo_operacao: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione o tempo</option>
            <option value="menos-1">Menos de um ano</option>
            <option value="mais-1">Mais que um ano</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="tipo_cancer" className="block font-medium mb-2 text-black dark:text-white">
            Sabe qual foi/é o tipo de câncer?
          </label>
          <input
            type="text"
            id="tipo_cancer"
            value={formData.tipo_cancer}
            onChange={(e) => setFormData({ ...formData, tipo_cancer: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Digite o tipo de câncer"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="tratamento_fisio" className="block font-medium mb-2">Fez tratamento fisioterápico antes do procedimento?</label>
          <select
            id="tratamento_fisio"
            value={formData.tratamento_fisio}
            onChange={(e) => setFormData({ ...formData, tratamento_fisio: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="familia_cancer" className="block font-medium mb-2">Alguém da sua família teve ou tem câncer de mama?</label>
          <select
            id="familia_cancer"
            value={formData.familia_cancer}
            onChange={(e) => setFormData({ ...formData, familia_cancer: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="recidiva" className="block font-medium mb-2">Já teve recidiva?</label>
          <select
            id="recidiva"
            value={formData.recidiva}
            onChange={(e) => setFormData({ ...formData, recidiva: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <h3 className="text-lg font-bold mb-4">Movimentos do braço após cirurgia</h3>
  
        <div className="mb-4">
          <label htmlFor="flexao_extensao" className="block font-medium mb-2">Você realiza movimento de flexão e extensão do braço do lado que realizou a cirurgia?</label>
          <select
            id="flexao_extensao"
            value={formData.flexao_extensao}
            onChange={(e) => setFormData({ ...formData, flexao_extensao: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="abducao_aducao" className="block font-medium mb-2">Você realiza o movimento de abdução e adução do braço do lado que fez a cirurgia?</label>
          <select
            id="abducao_aducao"
            value={formData.abducao_aducao}
            onChange={(e) => setFormData({ ...formData, abducao_aducao: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="rotacao" className="block font-medium mb-2">Você realiza os movimentos de rotação interna e externa do braço do lado em que fez a cirurgia?</label>
          <select
            id="rotacao"
            value={formData.rotacao}
            onChange={(e) => setFormData({ ...formData, rotacao: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="abducao_horizontal" className="block font-medium mb-2">Você realiza os movimentos de abdução e adução horizontal do braço do lado que fez a cirurgia?</label>
          <select
            id="abducao_horizontal"
            value={formData.abducao_horizontal}
            onChange={(e) => setFormData({ ...formData, abducao_horizontal: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="perda_forca" className="block font-medium mb-2">Você tem ou teve perda de força?</label>
          <select
            id="perda_forca"
            value={formData.perda_forca}
            onChange={(e) => setFormData({ ...formData, perda_forca: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-blue-300 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="" disabled>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label htmlFor="dor" className="block font-medium mb-2 text-black dark:text-white">
            Você sente dor? De 0 a 5, onde 0 é sem dor e 5 é dor intensa, como você classifica?
          </label>
          <div className="flex items-center">
            <input
              type="range"
              id="dor"
              min="0"
              max="5"
              step="1"
              value={formData.dor}
              onChange={(e) => setFormData({ ...formData, dor: e.target.value })}
              className="w-full appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <output className="ml-3 text-lg font-semibold text-gray-700 dark:text-white">{formData.dor}</output>
          </div>
        </div>
  
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
  
};

export default Form;
