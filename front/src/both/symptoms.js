import React from "react";
import  sintomas from "../assets/sintomas.jpg";

const Symptoms = () => {
    return (
        <div class="max-w-4xl mx-auto p-6 mt-10 mb-10 text-black dark:text-white">
        
        <h1 class="text-center text-3xl font-bold mb-6 text-pink-700 dark:text-pink-500">Sintomas do Câncer de Mama</h1>
        <div className="flex flex-col items-center">
            <img src={sintomas} alt="Mulher fazendo autoexame das mamas" class="mt-6 rounded-1g "  style={{ height: '300px', width: '400px' }}/>
        </div>

        
        <p class="mb-4 text-lg text-justify pt-10">
            O câncer de mama pode se manifestar de várias maneiras, e reconhecer seus sinais e sintomas pode ser crucial para um diagnóstico precoce. É importante observar que nem todos os sinais indicam necessariamente câncer, e algumas alterações podem ser benignas, mas qualquer mudança notável nas mamas deve ser avaliada por um profissional de saúde.
        </p>

        
        <h2 class="text-2xl font-semibold mb-4 text-center text-pink-700 dark:text-pink-500">Principais Sintomas</h2>

        <div class="space-y-6">
            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">1. Nódulo (Caroço) na Mama ou Axila</h3>
                <p className="text-justify">
                    Um dos sinais mais frequentes do câncer de mama é o aparecimento de um nódulo, ou caroço, na mama ou na região da axila. Esses nódulos podem ser duros, irregulares e, geralmente, indolores, embora alguns possam ser doloridos.
                </p>
                <p class="text-sm mt-2 text-gray-600 dark:text-white">Importante: Nem todo nódulo na mama é câncer. Muitos nódulos são benignos.</p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">2. Alterações no Tamanho ou Formato da Mama</h3>
                <p className="text-justify">
                    Mudanças no tamanho ou formato de uma ou ambas as mamas podem indicar a presença de um tumor. Essas alterações podem ser sutis ou mais evidentes.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">3. Mudanças na Pele da Mama</h3>
                <p className="text-justify">
                    A pele da mama pode se tornar enrugada, como se fosse "casca de laranja" (peau d'orange), apresentar vermelhidão, erupções, espessamento ou endurecimento em uma área específica.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">4. Alterações no Mamilo</h3>
                <p className="text-justify">
                    Se o mamilo começar a "entrar" (retrair-se) ou se alterar na aparência, isso pode ser um sinal de câncer. Além disso, secreções, especialmente sanguinolentas, devem ser investigadas.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">5. Dor ou Sensibilidade nas Mamas</h3>
                <p className="text-justify">
                    Embora o câncer de mama geralmente não cause dor nas fases iniciais, algumas mulheres podem sentir dor ou sensibilidade persistente nas mamas ou axilas.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">6. Alterações na Aréola</h3>
                <p className="text-justify">
                    Alterações na aréola, como descamação, formação de crostas ou vermelhidão, podem ser sintomas de Doença de Paget, um tipo raro de câncer de mama.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">7. Inchaço ou Nódulo na Axila</h3>
                <p className="text-justify">
                    O câncer de mama pode se espalhar para os gânglios linfáticos na axila, resultando em inchaço ou nódulos palpáveis nessa região.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">8. Veias Prominentes na Mama</h3>
                <p className="text-justify">
                    O aparecimento repentino de veias mais visíveis ou proeminentes na superfície da mama pode ocorrer devido ao crescimento de um tumor.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">9. Mudanças na Sensação Geral da Mama</h3>
                <p className="text-justify">
                    Algumas mulheres relatam uma sensação de peso ou uma textura diferente na mama afetada.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-bold text-pink-700 dark:text-pink-500">10. Sintomas Gerais no Corpo</h3>
                <p className="text-justify">
                    Em estágios mais avançados, o câncer de mama pode causar dor óssea, dificuldade para respirar, dores de cabeça e inchaço no braço (linfedema).
                </p>
            </div>
        </div>

        
        <h2 class="text-2xl font-semibold mt-10 mb-4 text-pink-700 dark:text-pink-500">A Importância da Detecção Precoce</h2>
        <p class="mb-6 text-justify">
            A detecção precoce do câncer de mama é crucial para melhorar as chances de cura. Fazer autoexames regulares, mamografias periódicas e consultas médicas são fundamentais para um diagnóstico precoce.
        </p>
        <p class="text-center text-lg font-semibold text-pink-700 dark:text-pink-500">Se notar qualquer um desses sintomas, consulte um médico imediatamente.</p>
    </div>
    )
};

export default Symptoms;