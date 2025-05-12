import React from "react";  

const Footer = () => {
    return (
        

<footer class="bg-white shadow-sm dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2025 <a href="#" class="hover:underline">Saúde Rosa™</a>. Todos os direitos reservados.
        </span>
        <ul class="flex flex-wrap items-center mt-3 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li class="mr-4 md:mr-6">
                <a href="#" class="hover:underline">Sobre</a>
            </li>
            <li class="mr-4 md:mr-6">
                <a href="#" class="hover:underline">Política de Privacidade</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contato</a>
            </li>
        </ul>
    </div>
</footer>


    )
};
export default Footer;