import React from "react";
import tratamentoImg from "../assets/tratamento.jpeg"
const Tratamento = () => {
    return ( 
   
    <div class="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10 dark:bg-gray-900">
     
        <h1 class="text-center text-4xl font-bold mb-6 text-pink-700 dark:text-pink-500">Tratamento do Câncer de Mama</h1> 
        <div className="flex flex-col items-center"> 
        <img className="mt-6 rounded-lg " style={{ height: '400px', width: '400px' }} src={tratamentoImg}/>
        </div>

        <p class="mb-4 text-lg pt-10 text-justify dark:text-white">
            O tratamento para o câncer de mama é individualizado e depende de vários fatores, como o tipo de câncer, o estágio da doença, a presença de receptores hormonais ou proteicos, além da idade e saúde geral da paciente. Abaixo, explicamos em detalhes cada uma das modalidades de tratamento.
        </p>

        <h2 class="text-pink-700 text-center text-2xl font-semibold mb-4 dark:text-pink-500">Modalidades de Tratamento</h2>

        <div class="space-y-6 dark:text-white">
            
            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">1. Cirurgia</h3>
                <p>A cirurgia é um dos principais tratamentos para o câncer de mama. Existem diferentes tipos de cirurgias:</p>
                <ul class="list-disc list-inside mt-2 ml-4">
                    <li>
                        <strong>Mastectomia:</strong> Remoção total da mama, podendo incluir mastectomia simples ou radical modificada, com retirada de linfonodos axilares.
                    </li>
                    <li>
                        <strong>Lumpectomia:</strong> Cirurgia conservadora que remove o tumor, preservando o máximo possível da mama.
                    </li>
                    <li>
                        <strong>Biópsia de Linfonodo Sentinela:</strong> Avaliação dos linfonodos para verificar se o câncer se espalhou.
                    </li>
                </ul>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">2. Radioterapia</h3>
                <p>A radioterapia utiliza raios de alta energia para destruir células cancerígenas restantes após a cirurgia, sendo aplicada externamente ou por braquiterapia.</p>
                <p class="text-sm mt-2">Duração: Geralmente, o tratamento dura de 3 a 6 semanas com sessões diárias.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">3. Quimioterapia</h3>
                <p>O uso de medicamentos anticancerígenos pode ocorrer antes (quimioterapia neoadjuvante) ou após a cirurgia (quimioterapia adjuvante). O objetivo é reduzir tumores ou eliminar células remanescentes.</p>
                <p class="text-sm mt-2">Duração: Geralmente de 3 a 6 meses.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">4. Terapia Hormonal (Endócrina)</h3>
                <p>O tratamento hormonal bloqueia hormônios que estimulam o crescimento de células cancerígenas, sendo indicado para tumores que respondem a estrogênio ou progesterona.</p>
                <ul class="list-disc list-inside mt-2 ml-4">
                    <li><strong>Inibidores de Aromatase:</strong> Usados em mulheres pós-menopáusicas.</li>
                    <li><strong>Tamoxifeno:</strong> Bloqueia os receptores de estrogênio.</li>
                    <li><strong>Supressão Ovariana:</strong> Redução dos hormônios através de cirurgia ou medicamentos.</li>
                </ul>
                <p class="text-sm mt-2">Duração: De 5 a 10 anos, dependendo do caso.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">5. Terapia-Alvo (Terapia Biológica)</h3>
                <p>Esse tratamento ataca características específicas das células cancerígenas, como a proteína HER2. Medicamentos como o trastuzumabe são usados para bloquear essa proteína e diminuir o crescimento do tumor.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">6. Imunoterapia</h3>
                <p>Imunoterapia fortalece o sistema imunológico para combater o câncer, sendo especialmente útil para câncer de mama triplo-negativo.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">7. Reconstrução Mamária</h3>
                <p>A reconstrução da mama pode ser feita imediatamente após a mastectomia ou em uma data posterior, com o uso de implantes ou enxertos de tecido da própria paciente.</p>
            </div>

            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">8. Cuidados Paliativos</h3>
                <p>Focados no alívio dos sintomas e na melhoria da qualidade de vida para pacientes com câncer avançado.</p>
            </div>

            
            <div className="text-justify">
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">9. Tratamento para Câncer de Mama Recorrente ou Metastático</h3>
                <p>Para cânceres que retornam ou se espalham, o tratamento inclui quimioterapia, radioterapia, terapia hormonal ou terapia-alvo, com foco no controle da doença e alívio dos sintomas.</p>
            </div>

            <h2 class="text-2xl font-semibold mt-10 mb-4 text-pink-700 text-center dark:text-pink-500">Considerações Finais</h2>
        <p>
            O tratamento do câncer de mama é adaptado para cada paciente, levando em conta o estágio e a biologia do tumor. A detecção precoce melhora significativamente as chances de cura e oferece mais opções de tratamento.
        </p>
        </div>

       
        
    </div>
    

    )


};
export default Tratamento;