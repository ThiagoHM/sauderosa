import React from "react";
import teago from "../assets/teago.png";
import milena from "../assets/milena.png";
import lais from "../assets/lais.png";
import gabriel from "../assets/gabriel.png";
import jose from "../assets/jose.png";


const Team = () => {
  return (
<section class="bg-white dark:bg-gray-900 flex">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 center">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nossa equipe</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Aqui estão todos os responsáveis pela criação e desenvolvimento deste site.</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style={{ height: '180px', width: '350px' }}
                  src={teago} alt="Thiago Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Thiago Henrique Machado</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Front-End</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Estudante de Engenharia de Software (5º termo). 
                    Formado em Técnico em Administração, apaixonado por tecnologia.
                    Atuando como Front-End.
                    </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                     <div className="flex">  
                        <a href="https://www.linkedin.com/in/thiago-machado-048950305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.449C0 23.204.796 24 1.775 24h20.449c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.097 20.452H3.675V9.076h3.422v11.376zm-1.71-12.926c-1.095 0-1.974-.887-1.974-1.974 0-1.096.883-1.974 1.974-1.974 1.094 0 1.974.878 1.974 1.974 0 1.087-.88 1.974-1.974 1.974zm16.36 12.926h-3.422v-5.556c0-1.33-.027-3.04-1.847-3.04-1.849 0-2.131 1.443-2.131 2.926v5.67h-3.422V9.076h3.287v1.545h.047c.46-.87 1.587-1.787 3.27-1.787 3.493 0 4.136 2.296 4.136 5.283v6.356h-.012z"/>
                            </svg>
                        </a>
                        <div className="p-2 pt-0">
                        <a href="https://www.instagram.com/teago_machado?igsh=MXU4cXV4eTR2MGNreQ%3D%3D&utm_source=qr" target="_blank" class="text-pink-600 hover:text-pink-400 block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.208 0 3.58.012 4.85.07 1.265.058 1.966.27 2.426.46a4.96 4.96 0 011.731 1.131c.663.662 1.106 1.535 1.28 2.426.06 1.27.07 1.643.07 4.85 0 3.208-.01 3.58-.07 4.85-.174.891-.617 1.764-1.28 2.426a4.96 4.96 0 01-1.731 1.131c-.46.19-1.161.402-2.426.46-1.27.058-1.642.07-4.85.07s-3.58-.012-4.85-.07c-1.265-.058-1.966-.27-2.426-.46a4.96 4.96 0 01-1.731-1.131c-.663-.662-1.106-1.535-1.28-2.426C2.163 16.582 2.153 16.208 2.153 13s.01-3.58.07-4.85c.174-.891.617-1.764 1.28-2.426A4.96 4.96 0 014.99 2.693c.46-.19 1.161-.402 2.426-.46C8.42 2.175 8.793 2.163 12 2.163zm0-2.163C8.741 0 8.337.007 7.073.067c-1.267.061-2.166.268-2.897.554-1.013.367-1.848.883-2.533 1.597A7.51 7.51 0 00.67 5.254C.266 5.984.059 6.883 0 8.15-.01 8.317 0 8.707 0 12s.01 3.683.067 4.849c.061 1.267.268 2.166.554 2.897.367 1.013.883 1.848 1.597 2.533.685.685 1.52 1.231 2.533 1.597.73.287 1.63.493 2.897.554 1.266.061 1.67.067 4.85.067s3.58-.006 4.85-.067c1.267-.061 2.166-.268 2.897-.554a7.51 7.51 0 002.533-1.597c.685-.685 1.231-1.52 1.597-2.533.287-.73.493-1.63.554-2.897.061-1.267.067-1.67.067-4.85s-.006-3.58-.067-4.85c-.061-1.266-.268-2.166-.554-2.897A7.51 7.51 0 0021.12 2.693c-.685-.685-1.52-1.231-2.533-1.597-.73-.287-1.63-.493-2.897-.554C15.665.007 15.261 0 12 0zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.025a3.864 3.864 0 110-7.727 3.864 3.864 0 010 7.727zm6.406-9.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                        </a>
                        </div>
                     </div>       
                    </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"  style={{ height: '180px', width: '450px' }}
                  src={milena} alt="Milena Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Milena Maria Romano da Silva</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Product Owner</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Advogada no escritório Scatambuli, em Guapirama-PR
                    Estudante de Engenharia de Software (5º termo). 
                    Pós-graduada em Direito Digital e Compliance pela Damásio Educacional.
                    Atuando como Product Owner.
                    </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                     <div className="flex">  
                        <a href="https://www.linkedin.com/in/milena-romano-882801261/" target="_blank" class="text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.449C0 23.204.796 24 1.775 24h20.449c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.097 20.452H3.675V9.076h3.422v11.376zm-1.71-12.926c-1.095 0-1.974-.887-1.974-1.974 0-1.096.883-1.974 1.974-1.974 1.094 0 1.974.878 1.974 1.974 0 1.087-.88 1.974-1.974 1.974zm16.36 12.926h-3.422v-5.556c0-1.33-.027-3.04-1.847-3.04-1.849 0-2.131 1.443-2.131 2.926v5.67h-3.422V9.076h3.287v1.545h.047c.46-.87 1.587-1.787 3.27-1.787 3.493 0 4.136 2.296 4.136 5.283v6.356h-.012z"/>
                            </svg>
                        </a>
                        <div className="p-2 pt-0">
                        <a href="https://www.instagram.com/milena.romano9919?igsh=Z2lmeDJ6eHp6d2Uy" target="_blank" class="text-pink-600 hover:text-pink-400 block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.208 0 3.58.012 4.85.07 1.265.058 1.966.27 2.426.46a4.96 4.96 0 011.731 1.131c.663.662 1.106 1.535 1.28 2.426.06 1.27.07 1.643.07 4.85 0 3.208-.01 3.58-.07 4.85-.174.891-.617 1.764-1.28 2.426a4.96 4.96 0 01-1.731 1.131c-.46.19-1.161.402-2.426.46-1.27.058-1.642.07-4.85.07s-3.58-.012-4.85-.07c-1.265-.058-1.966-.27-2.426-.46a4.96 4.96 0 01-1.731-1.131c-.663-.662-1.106-1.535-1.28-2.426C2.163 16.582 2.153 16.208 2.153 13s.01-3.58.07-4.85c.174-.891.617-1.764 1.28-2.426A4.96 4.96 0 014.99 2.693c.46-.19 1.161-.402 2.426-.46C8.42 2.175 8.793 2.163 12 2.163zm0-2.163C8.741 0 8.337.007 7.073.067c-1.267.061-2.166.268-2.897.554-1.013.367-1.848.883-2.533 1.597A7.51 7.51 0 00.67 5.254C.266 5.984.059 6.883 0 8.15-.01 8.317 0 8.707 0 12s.01 3.683.067 4.849c.061 1.267.268 2.166.554 2.897.367 1.013.883 1.848 1.597 2.533.685.685 1.52 1.231 2.533 1.597.73.287 1.63.493 2.897.554 1.266.061 1.67.067 4.85.067s3.58-.006 4.85-.067c1.267-.061 2.166-.268 2.897-.554a7.51 7.51 0 002.533-1.597c.685-.685 1.231-1.52 1.597-2.533.287-.73.493-1.63.554-2.897.061-1.267.067-1.67.067-4.85s-.006-3.58-.067-4.85c-.061-1.266-.268-2.166-.554-2.897A7.51 7.51 0 0021.12 2.693c-.685-.685-1.52-1.231-2.533-1.597-.73-.287-1.63-.493-2.897-.554C15.665.007 15.261 0 12 0zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.025a3.864 3.864 0 110-7.727 3.864 3.864 0 010 7.727zm6.406-9.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                        </a>
                        </div>
                     </div>       
                    </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style={{ height: '180px', width: '300px' }}
                  src={jose} alt="José Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">José Gabriel Celso de Lima</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Analista de Banco de Dados</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Estudante de Engenharia de Software (5º termo). 
                    trabalha como auxiliar de veterinário.
                    Atundo como analista de banco de dados.
                    </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                     <div className="flex">  
                        <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-lima-06b7b2327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.449C0 23.204.796 24 1.775 24h20.449c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.097 20.452H3.675V9.076h3.422v11.376zm-1.71-12.926c-1.095 0-1.974-.887-1.974-1.974 0-1.096.883-1.974 1.974-1.974 1.094 0 1.974.878 1.974 1.974 0 1.087-.88 1.974-1.974 1.974zm16.36 12.926h-3.422v-5.556c0-1.33-.027-3.04-1.847-3.04-1.849 0-2.131 1.443-2.131 2.926v5.67h-3.422V9.076h3.287v1.545h.047c.46-.87 1.587-1.787 3.27-1.787 3.493 0 4.136 2.296 4.136 5.283v6.356h-.012z"/>
                            </svg>
                        </a>
                        <div className="p-2 pt-0">
                        <a href="https://www.instagram.com/ogab_riel7?igsh=MWlpempsOWQ0Z2Nzdw==" target="_blank" class="text-pink-600 hover:text-pink-400 block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.208 0 3.58.012 4.85.07 1.265.058 1.966.27 2.426.46a4.96 4.96 0 011.731 1.131c.663.662 1.106 1.535 1.28 2.426.06 1.27.07 1.643.07 4.85 0 3.208-.01 3.58-.07 4.85-.174.891-.617 1.764-1.28 2.426a4.96 4.96 0 01-1.731 1.131c-.46.19-1.161.402-2.426.46-1.27.058-1.642.07-4.85.07s-3.58-.012-4.85-.07c-1.265-.058-1.966-.27-2.426-.46a4.96 4.96 0 01-1.731-1.131c-.663-.662-1.106-1.535-1.28-2.426C2.163 16.582 2.153 16.208 2.153 13s.01-3.58.07-4.85c.174-.891.617-1.764 1.28-2.426A4.96 4.96 0 014.99 2.693c.46-.19 1.161-.402 2.426-.46C8.42 2.175 8.793 2.163 12 2.163zm0-2.163C8.741 0 8.337.007 7.073.067c-1.267.061-2.166.268-2.897.554-1.013.367-1.848.883-2.533 1.597A7.51 7.51 0 00.67 5.254C.266 5.984.059 6.883 0 8.15-.01 8.317 0 8.707 0 12s.01 3.683.067 4.849c.061 1.267.268 2.166.554 2.897.367 1.013.883 1.848 1.597 2.533.685.685 1.52 1.231 2.533 1.597.73.287 1.63.493 2.897.554 1.266.061 1.67.067 4.85.067s3.58-.006 4.85-.067c1.267-.061 2.166-.268 2.897-.554a7.51 7.51 0 002.533-1.597c.685-.685 1.231-1.52 1.597-2.533.287-.73.493-1.63.554-2.897.061-1.267.067-1.67.067-4.85s-.006-3.58-.067-4.85c-.061-1.266-.268-2.166-.554-2.897A7.51 7.51 0 0021.12 2.693c-.685-.685-1.52-1.231-2.533-1.597-.73-.287-1.63-.493-2.897-.554C15.665.007 15.261 0 12 0zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.025a3.864 3.864 0 110-7.727 3.864 3.864 0 010 7.727zm6.406-9.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                        </a>
                        </div>
                     </div>       
                    </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"  style={{ height: '180px', width: '400px' }}
                  src={lais} alt="Lais Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Lais de Oliveira</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">QA</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Estudante de Engenharia de Software (5º termo). 
                    Trabalha na área administrativa de uma empresa de segurança residencial, atuando também com impressões 3D.
                    Atuando como QA.
                    </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                     <div className="flex">  
                        <a href="https://www.linkedin.com/in/lais-oliveira-298420285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.449C0 23.204.796 24 1.775 24h20.449c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.097 20.452H3.675V9.076h3.422v11.376zm-1.71-12.926c-1.095 0-1.974-.887-1.974-1.974 0-1.096.883-1.974 1.974-1.974 1.094 0 1.974.878 1.974 1.974 0 1.087-.88 1.974-1.974 1.974zm16.36 12.926h-3.422v-5.556c0-1.33-.027-3.04-1.847-3.04-1.849 0-2.131 1.443-2.131 2.926v5.67h-3.422V9.076h3.287v1.545h.047c.46-.87 1.587-1.787 3.27-1.787 3.493 0 4.136 2.296 4.136 5.283v6.356h-.012z"/>
                            </svg>
                        </a>
                        <div className="p-2 pt-0">
                        <a href="https://www.instagram.com/llah015?igsh=bjYweHdmOGp3NzA5" target="_blank" class="text-pink-600 hover:text-pink-400 block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.208 0 3.58.012 4.85.07 1.265.058 1.966.27 2.426.46a4.96 4.96 0 011.731 1.131c.663.662 1.106 1.535 1.28 2.426.06 1.27.07 1.643.07 4.85 0 3.208-.01 3.58-.07 4.85-.174.891-.617 1.764-1.28 2.426a4.96 4.96 0 01-1.731 1.131c-.46.19-1.161.402-2.426.46-1.27.058-1.642.07-4.85.07s-3.58-.012-4.85-.07c-1.265-.058-1.966-.27-2.426-.46a4.96 4.96 0 01-1.731-1.131c-.663-.662-1.106-1.535-1.28-2.426C2.163 16.582 2.153 16.208 2.153 13s.01-3.58.07-4.85c.174-.891.617-1.764 1.28-2.426A4.96 4.96 0 014.99 2.693c.46-.19 1.161-.402 2.426-.46C8.42 2.175 8.793 2.163 12 2.163zm0-2.163C8.741 0 8.337.007 7.073.067c-1.267.061-2.166.268-2.897.554-1.013.367-1.848.883-2.533 1.597A7.51 7.51 0 00.67 5.254C.266 5.984.059 6.883 0 8.15-.01 8.317 0 8.707 0 12s.01 3.683.067 4.849c.061 1.267.268 2.166.554 2.897.367 1.013.883 1.848 1.597 2.533.685.685 1.52 1.231 2.533 1.597.73.287 1.63.493 2.897.554 1.266.061 1.67.067 4.85.067s3.58-.006 4.85-.067c1.267-.061 2.166-.268 2.897-.554a7.51 7.51 0 002.533-1.597c.685-.685 1.231-1.52 1.597-2.533.287-.73.493-1.63.554-2.897.061-1.267.067-1.67.067-4.85s-.006-3.58-.067-4.85c-.061-1.266-.268-2.166-.554-2.897A7.51 7.51 0 0021.12 2.693c-.685-.685-1.52-1.231-2.533-1.597-.73-.287-1.63-.493-2.897-.554C15.665.007 15.261 0 12 0zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.025a3.864 3.864 0 110-7.727 3.864 3.864 0 010 7.727zm6.406-9.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                        </a>
                        </div>
                     </div>       
                    </li>
                  </ul>
              </div>
          </div> 
      </div>  
      
      <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 mx-auto max-w-lg">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style={{ height: '180px', width: '350px' }}
                  src={gabriel} alt="Gabriel Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Gabriel de Oliveira Cordeiro</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Back-End</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Estudante de Engenharia de Software (5º termo). 
                    Trabalha com logistica em uma transportadora.
                    Atuando como Back-End.
                    </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                     <div className="flex">  
                        <a href="https://www.linkedin.com/in/gabriel-cordeiro-a04a91287/" target="_blank" class="text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.449C0 23.204.796 24 1.775 24h20.449c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.097 20.452H3.675V9.076h3.422v11.376zm-1.71-12.926c-1.095 0-1.974-.887-1.974-1.974 0-1.096.883-1.974 1.974-1.974 1.094 0 1.974.878 1.974 1.974 0 1.087-.88 1.974-1.974 1.974zm16.36 12.926h-3.422v-5.556c0-1.33-.027-3.04-1.847-3.04-1.849 0-2.131 1.443-2.131 2.926v5.67h-3.422V9.076h3.287v1.545h.047c.46-.87 1.587-1.787 3.27-1.787 3.493 0 4.136 2.296 4.136 5.283v6.356h-.012z"/>
                            </svg>
                        </a>
                        <div className="p-2 pt-0">
                        <a href="https://www.instagram.com/gabriel.o.cordeiro?igsh=cG03a3pxeTQwb21x" target="_blank" class="text-pink-600 hover:text-pink-400 block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.208 0 3.58.012 4.85.07 1.265.058 1.966.27 2.426.46a4.96 4.96 0 011.731 1.131c.663.662 1.106 1.535 1.28 2.426.06 1.27.07 1.643.07 4.85 0 3.208-.01 3.58-.07 4.85-.174.891-.617 1.764-1.28 2.426a4.96 4.96 0 01-1.731 1.131c-.46.19-1.161.402-2.426.46-1.27.058-1.642.07-4.85.07s-3.58-.012-4.85-.07c-1.265-.058-1.966-.27-2.426-.46a4.96 4.96 0 01-1.731-1.131c-.663-.662-1.106-1.535-1.28-2.426C2.163 16.582 2.153 16.208 2.153 13s.01-3.58.07-4.85c.174-.891.617-1.764 1.28-2.426A4.96 4.96 0 014.99 2.693c.46-.19 1.161-.402 2.426-.46C8.42 2.175 8.793 2.163 12 2.163zm0-2.163C8.741 0 8.337.007 7.073.067c-1.267.061-2.166.268-2.897.554-1.013.367-1.848.883-2.533 1.597A7.51 7.51 0 00.67 5.254C.266 5.984.059 6.883 0 8.15-.01 8.317 0 8.707 0 12s.01 3.683.067 4.849c.061 1.267.268 2.166.554 2.897.367 1.013.883 1.848 1.597 2.533.685.685 1.52 1.231 2.533 1.597.73.287 1.63.493 2.897.554 1.266.061 1.67.067 4.85.067s3.58-.006 4.85-.067c1.267-.061 2.166-.268 2.897-.554a7.51 7.51 0 002.533-1.597c.685-.685 1.231-1.52 1.597-2.533.287-.73.493-1.63.554-2.897.061-1.267.067-1.67.067-4.85s-.006-3.58-.067-4.85c-.061-1.266-.268-2.166-.554-2.897A7.51 7.51 0 0021.12 2.693c-.685-.685-1.52-1.231-2.533-1.597-.73-.287-1.63-.493-2.897-.554C15.665.007 15.261 0 12 0zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.025a3.864 3.864 0 110-7.727 3.864 3.864 0 010 7.727zm6.406-9.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                        </a>
                        </div>
                     </div>       
                    </li>
                  </ul>
              </div>
          </div>  
  </div>
</section>
  );
};

export default Team;
