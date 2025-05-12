import React from "react";  
import homeimg from "../assets/home.jpg";

const Home = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Oque é o site <br/>
                <span class="text-pink-700 dark:text-pink-500">Saúde Rosa</span>
                </h1>
            <p class="text-justify max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Nosso site tem o objetivo de apoiar mulheres com câncer de mama, oferecendo informações
             recursos e conexões com redes de suporte. Aqui, você encontra conteúdos sobre tratamento, bem-estar e autocuidado!   
            </p>
        </div>
        <div className="pl-20">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-40 h-40 lg:w-64 lg:h-64">
            <img src={homeimg} alt="mockup"/>
        </div> 
        </div>
    </div>
</section>
    )
};
export default Home;