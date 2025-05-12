import React from "react";
import sint1 from "../assets/sint1.jpeg";
import sint2 from "../assets/sint2.png";
import riscos from "../assets/riscos.jpg";
import prevencoes from "../assets/prevencoes.png";
import trata1 from "../assets/trata1.png";
import trata2 from "../assets/trata2.jpg";
import { Link } from "react-router-dom";

const Guide = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pt-30">
            {/* Sintomas */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={sint1} alt="Sintomas do câncer de mama 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={sint2} alt="Sintomas do câncer de mama 2"/>
                </div>
                <div className="text-black sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <span className="text-pink-700 dark:text-pink-500">Sintomas</span> do Câncer de Mama
                    </h2>
                    <p className="text-justify mb-4">
                        Os principais sintomas do câncer de mama incluem o surgimento de um nódulo na mama ou axila,
                        mudanças no formato ou tamanho da mama, secreção anormal pelo mamilo, vermelhidão ou retração da pele e dor persistente. 
                        É importante estar atenta a qualquer alteração e procurar um médico para avaliação.
                    </p>
                    <Link to="/symptoms" className="bg-black text-white text-lg px-6 py-3 rounded-full dark:bg-white dark:text-black">
                        Saiba mais
                    </Link>    
                </div>
            </div>

            {/* Riscos e Prevenções */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="text-black sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <span className="text-pink-700 dark:text-pink-500">Riscos e Prevenções</span> do Câncer de Mama
                    </h2>
                    <p className="text-justify mb-4">
                        Fatores como idade, histórico familiar, tabagismo, sedentarismo e obesidade podem aumentar o risco de câncer de mama. 
                        Para prevenir, é essencial manter uma alimentação saudável, praticar atividades físicas, evitar o álcool e o cigarro, 
                        além de realizar exames de rotina e o autoexame regularmente.
                    </p>
                    <Link to="/risks" className="bg-black text-white text-lg px-6 py-3 rounded-full dark:bg-white dark:text-black">
                        Saiba mais
                    </Link>    
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={riscos} alt="Riscos do câncer de mama"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={prevencoes} alt="Prevenções do câncer de mama"/>
                </div>
            </div>

            {/* Tratamentos */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={trata1} alt="Tratamentos do câncer de mama 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg h-auto"  style={{ height: '300px', width: '300px' }} src={trata2} alt="Tratamentos do câncer de mama 2"/>
                </div>
                <div className="text-black sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <span className="text-pink-700 dark:text-pink-500">Tratamentos</span> do Câncer de Mama
                    </h2>
                    <p className="text-justify mb-4">
                        O tratamento do câncer de mama varia conforme o estágio da doença e pode incluir cirurgia, quimioterapia, 
                        radioterapia, hormonioterapia e terapias-alvo. O acompanhamento médico é essencial para definir a melhor abordagem para cada caso, 
                        visando a eficácia do tratamento e a qualidade de vida da paciente.
                    </p>
                    <Link to="/Tratamento" className="bg-black text-white text-lg px-6 py-3 rounded-full dark:bg-white dark:text-black">
                        Saiba mais
                    </Link> 
                </div>
            </div>
        </section>
    );
};

export default Guide;
