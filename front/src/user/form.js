import React, { useState } from "react";
import logoform from "../assets/logoform.png"; 
import axios from "axios";
import { useAuth } from "../adm/authcontext"; 

const Form = () => {
  const { usuario } = useAuth();
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

    if (!usuario?.id) {
      setMessage("Usuário não autenticado.");
      return;
    }

    const dadosParaEnvio = { ...formData, usuarioId: usuario.id };

    try {
      const response = await axios.post("http://localhost:4000/questionario", dadosParaEnvio);
      if (response.status === 201) {
        const gravidade = response.data.gravidade;
        const estagio = mapaGravidade(gravidade);
        setMessage(`Formulário enviado com sucesso! ${estagio}`);
        getUserLocation();
        resetForm();
      }
    } catch (error) {
      setMessage("Erro ao enviar o formulário. Tente novamente.");
      console.error("Erro no envio:", error);
    }
  };

  const resetForm = () => {
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
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const googleMapsUrl = `https://www.google.com/maps/search/hospitais+cancer+de+mama/@${latitude},${longitude},12z`;
          window.open(googleMapsUrl, "_blank");
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
          alert("Não foi possível obter sua localização.");
        }
      );
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  const mapaGravidade = (nivel) => {
    if (nivel === "Grave") return "Estágio Avançado";
    if (nivel === "Moderado") return "Estágio Intermediário";
    return "Estágio Inicial";
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
            <option value="menos um">Menos de um ano</option>
            <option value="mais um">Mais que um ano</option>
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
          <label htmlFor="rotacao" className="block font-medium mb-2">Você consegue realizar a rotação do braço?</label>
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
          <label htmlFor="abducao_horizontal" className="block font-medium mb-2">Você consegue realizar a abdução horizontal do braço?</label>
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
          <label htmlFor="perda_forca" className="block font-medium mb-2">Houve perda de força no braço operado?</label>
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
          <label htmlFor="dor" className="block font-medium mb-2">Qual o nível de dor no braço (de 0 a 10)?</label>
          <input
            type="range"
            id="dor"
            min="0"
            max="10"
            value={formData.dor}
            onChange={(e) => setFormData({ ...formData, dor: Number(e.target.value) })}  
            className="w-full"
          />
          <span className="text-sm">Dor: {formData.dor}</span>
        </div>


        <div className="mb-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Enviar Formulário
          </button>
        </div>

        {message && <div className="text-lg bg-red-300 p-3 text-center text-black dark:text-white bg:red-700">{message}</div>}
      </form>
    </div>
  );
};

export default Form;
