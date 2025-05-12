import React from "react";
import risksimg from "../assets/risks.png"

const Risks = () => {
    return (

    <div class="max-w-4xl mx-auto p-6 mt-10 mb-10 text-black dark:text-white">
    
      <h1 class="text-center text-3xl font-bold mb-6 text-pink-700 dark:text-pink-500">Fatores de Risco do Câncer de Mama</h1>
      <div className="flex flex-col items-center">
            <img src={risksimg} alt="Mulher fazendo autoexame das mamas" style={{ height: '400px', width: '400px' }} />
      </div>

      <p class="mb-4 text-lg text-justify pt-10">O câncer de mama é um dos tipos mais comuns entre as mulheres e pode afetar homens, embora seja raro. Compreender os fatores de risco é crucial para a prevenção e detecção precoce.</p>
    

    
    <section class="mb-8">
      <h2 class="text-xl font-bold text-pink-700 dark:text-pink-500">1.Fatores de Risco </h2>
      <ul class="list-disc list-inside mt-4 space-y-2 text-justify">
        <li><strong>Idade:</strong> O risco aumenta à medida que a idade avança. A maioria dos casos ocorre em mulheres com mais de 50 anos.</li>
        <li><strong>Histórico Familiar:</strong> Ter familiares próximos (mãe, irmã, filha) com câncer de mama aumenta o risco.</li>
        <li><strong>Alterações genéticas:</strong> Mutações em genes como BRCA1 e BRCA2 estão associadas a um risco elevado.</li>
        <li><strong>Exposição hormonal:</strong> Acompanhamento contínuo para monitorar efeitos a longo prazo.</li>
        <li><strong>Estilo de vida:</strong>Sedentarismo: A falta de atividade física pode contribuir para o risco.
          Alcoolismo: Consumo de álcool em excesso aumenta as chances de desenvolvimento da doença.
          Obesidade: Mulheres com sobrepeso, especialmente após a menopausa, têm risco maior.</li>
        <li><strong>Exposição à radiação:</strong>Exposição a radiações em tratamentos médicos na região do tórax pode ser um fator de risco.</li>
        <li><strong>Histórico de doenças mamárias:</strong> Condições como hiperplasia atípica aumentam o risco.</li>
      </ul>
    </section>

    
    <section class="mb-8">
      <h2 class="text-xl font-bold text-pink-700 dark:text-pink-500">2. Prevenção</h2>
      <ul class="list-disc list-inside mt-4 space-y-2 text-justify">
        <li><strong>Exames de rotina:</strong> </li>
        <li><strong>Manter um estilo de vida saudável:</strong> </li>
        <li><strong>Alimentação equilibrada:</strong> </li>
        <li><strong>Amamentação:</strong>Amamentar por períodos prolongados pode oferecer uma proteção leve contra o câncer de mama.</li>
        <li><strong>Evitar reposição hormonal prolongada:</strong> Mulheres que precisam de terapia hormonal na menopausa devem conversar com seus médicos sobre os riscos e a duração do tratamento.</li>
        <li><strong>Avaliação genética:</strong>Para quem tem histórico familiar, realizar testes genéticos para mutações BRCA1 e BRCA2 pode ajudar na prevenção e em decisões sobre medidas preventivas.</li>
      </ul>
    </section>

    
    <section class="mb-8">
      <h2 class="text-xl font-bold text-pink-700 dark:text-pink-500">3. Detecção Precoce</h2>
      <ul class="list-disc list-inside mt-4 space-y-2 text-justify">
        <li>A detecção precoce aumenta as chances de sucesso no tratamento. Por isso, a combinação de autoexame, mamografias regulares e consultas médicas é fundamental para identificar o câncer em estágios iniciais.

          <strong>estratégias não garantem a prevenção total, mas podem reduzir significativamente o risco e promover uma intervenção mais eficaz.</strong></li>
      </ul>
    </section>

    <section class="mb-8">  
    <h2 class="mt-20 text-xl text-center font-bold text-pink-700 dark:text-pink-500 text-justify">Conclusão</h2>
        <ul class="list-disc list-inside mt-4 space-y-2"> 
            <li class="text-lg">A recuperação do câncer de mama é um processo contínuo. Com suporte médico, fisioterapeutico e emocional adequados, é possível alcançar uma boa qualidade de vida.</li>
        </ul>
    </section>

  </div>


    );
};

export default Risks;