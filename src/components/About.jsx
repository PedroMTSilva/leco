import React from 'react'
import { useState } from 'react'
import 'flowbite';
import { Tab } from '@headlessui/react'
import Photo from '../info/leandrocorreia.png'
import Pdf from '../info/resume.pdf'

const About = () => {
  return (
    <div name='about' className="w-full px-8 pt-[10%] mb-16 dark:bg-warm-gray-900">
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        {/* Image + Title + Text */}
        <div className="max-w-[1000px] w-full px-4 flex flex-row gap-2 mb-16">
          <div className='lg:block hidden basis-2/5'>
            <img className="rounded-full" src={Photo} alt="profilepicture" width="350" height="350"></img>
          </div>
          {/* Title + Text */}
          <div className='basis-5/5 lg:basis-3/5'>
            <div className="max-w-[1000px] w-full px-4 flex flex-row mb-12">
              <div className='basis-1/5'></div>
              <div className='basis-3/5'><p className='dark:text-warm-gray-50 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400'>Sobre mim</p></div>
              <div className='basis-1/5'></div>
            </div>
            <div className='dark:text-warm-gray-50 justify-center text-center px-8 text-lg'>
              <p>Olá o meu nome é Leandro Correia. Sou estudante na Escola Superior de Tecnologia e Gestão de Águeda pertencente à Universidade de Aveiro, de momento estou a finalizar o curso de Tecnologias de Informação. Programar é uma das minhas paixões desde criança e agora o meu objetivo é expandir os meus conhecimentos e fazer parte de grandes projetos.</p>
            </div>
          </div>
        </div>
        {/* Technical/Soft Skills */}
        <div className="max-w-[1000px] w-full px-8 mb-10">
          <MyTabs />
        </div>
        {/* Curriculum Button */}
        <div className="max-w-[1000px] w-full px-4 flex flex-row justify-center text-center">
          <div className='items-center'>
            <div className='mb-4 row dark:text-warm-gray-50'>
              Para saber mais informações descarregue o meu currículo em baixo:
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <a href={Pdf} className='flex items-center'>
                <svg className="fill-white w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Descarregar</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// headless ui tabs props
function MyTabs() {
  let [categories] = useState({
    "Technical Skills": [
      {
        id: 1,
        title: 'HTML/CSS',
        progress: "95%",
      },
      {
        id: 2,
        title: 'Javascript',
        progress: "85%",
      },
      {
        id: 3,
        title: 'SQL',
        progress: "90%",
      },
      {
        id: 4,
        title: 'React',
        progress: "70%",
      },
      {
        id: 5,
        title: 'Android',
        progress: "75%",
      },
      {
        id: 6,
        title: 'Java',
        progress: "85%",
      },
      {
        id: 7,
        title: 'C',
        progress: "75%",
      },
      {
        id: 8,
        title: 'Bash',
        progress: "65%",
      },
    ],
    "Soft Skills": [
      {
        id: 1,
        title: 'Organizado',
        progress: "81%",
      },
      {
        id: 2,
        title: 'Adaptável',
        progress: "90%",
              
      },
      {
        id: 3,
        title: 'Criativo',
        progress: "70%",
      },
      {
        id: 4,
        title: 'Positivo',
        progress: "80%",
      },
      {
        id: 5,
        title: 'Persistente',
        progress: "87%",
      },
      {
        id: 6,
        title: 'Pragmático',
        progress: "75%",
      },
      {
        id: 7,
        title: 'Trabalho em equipa',
        progress: "95%",
      },
      {
        id: 8,
        title: 'Focado',
        progress: "73%",
      },
    ],
  })

  return (
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-gray-50/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 dark:text-blue-50',
                  'ring-white dark:ring-warm-gray-400 ring-opacity-60 ring-offset-2 ring-offset-blue-400 dark:ring-offset-warm-gray-500 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white dark:bg-warm-gray-500 shadow'
                    : 'text-gray-400 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white dark:bg-warm-gray-600 p-3'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="dark:text-white relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-warm-gray-500">
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-warm-gray-300">
                        <div className={"bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"} style={{width: post.progress}}></div>
                      </div>
                    </ul>
                    <a className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    
  )
}

export default About      

