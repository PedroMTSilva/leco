import React from 'react'
import { Tab } from '@headlessui/react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen px-16">
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Image + Title + Text */}
        <div className="max-w-[1000px] w-full px-4 flex flex-row gap-2 mb-16">
          <div className='lg:block hidden basis-2/5'>
            <img className="rounded-full" src='LeandroCorreia.png' alt="profilepicture" width="350" height="350"></img>
          </div>
          {/* Title + Text */}
          <div className='basis-5/5 lg:basis-3/5'>
            <div className="max-w-[1000px] w-full px-4 flex flex-row mb-12">
              <div className='basis-1/5'></div>
              <div className='basis-3/5'><p className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-500'>Sobre mim</p></div>
              <div className='basis-1/5'></div>
            </div>
            <div className='justify-center text-center px-8 text-lg'>
              <p>Olá o meu nome é Leandro Correia. Sou estudante na Escola Superior de Tecnologia e Gestão de Águeda pertencente à Universidade de Aveiro, de momento estou a finalizar o curso de Tecnologias de Informação. Programar é uma das minha paixões desde jovem e agora o meu objetivo é expandir os meus conhecimentos e fazer parte de grandes projetos.</p>
            </div>
          </div>
        </div>
        {/* Technical/Soft Skills */}
        <div className="max-w-[1000px] w-full px-4 flex flex-row">
            <div className="sm:hidden">
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Technical Skills</option>
                    <option>Soft Skills</option>
                </select>
            </div>
            <ul className="hidden text-md font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Technical Skills</a>
                </li>
                <li className="w-full">
                    <a className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Soft Skills</a>
                </li>
            </ul>
        </div>
        {/* Curriculum Button */}
        <div className="max-w-[1000px] w-full px-4 flex flex-row">
          <div className=''>
            <button>Botão do final</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About