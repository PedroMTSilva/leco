import React from 'react'
import 'flowbite';

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
              <p>Olá o meu nome é Leandro Correia. Sou estudante na Escola Superior de Tecnologia e Gestão de Águeda pertencente à Universidade de Aveiro, de momento estou a finalizar o curso de Tecnologias de Informação. Programar é uma das minhas paixões desde criança e agora o meu objetivo é expandir os meus conhecimentos e fazer parte de grandes projetos.</p>
            </div>
          </div>
        </div>
        {/* Technical/Soft Skills */}
        <div className="max-w-[1000px] w-full px-4 ">
          <div className="sm:hidden">
              <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Technical Skills</option>
                  <option>Soft Skills</option>
              </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="w-full" role="presentation">
                  <button className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" id="tech-tab" data-tabs-target="#tech" type="button" role="tab" aria-controls="tech" aria-selected="true">Technical Skills</button>
              </li>
              <li className="w-full" role="presentation">
                  <button className="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" id="soft-tab" data-tabs-target="#soft" type="button" role="tab" aria-controls="soft" aria-selected="false">Soft Skills</button>
              </li>
          </ul>
          <div id="myTabContent">
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="tech" role="tabpanel" aria-labelledby="tech-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">Tech</p>
            </div>
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="soft" role="tabpanel" aria-labelledby="soft-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">Soft</p>
            </div>
          </div>
        </div>
        {/* Curriculum Button */}
        {/* <div className="max-w-[1000px] w-full px-4 flex flex-row">
          <div className=''>
            <button>Botão do final</button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About