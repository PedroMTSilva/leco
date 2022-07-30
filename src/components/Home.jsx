import React from 'react'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Leco Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="flex lg:text-10xl md:text-8xl sm:text-6xl text-5xl font-black text-gray-900 mx-auto">
          <div className='flex'>
            <div className="text-yellow-400">Le</div>
            andro&nbsp;
          </div>
          <div className='flex'>
            <div className="text-blue-600">Co</div>
            rreia
          </div>
        </div>
        <div className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-black mb-4 text-gray-900 mx-auto">
          Software Developer
        </div>
      </div>
      {/* Social Media */}
      <div className="hidden md:flex flex-col fixed right-0 top-[35%]">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-slate-900 p-4 rounded-l-2xl'><a className='flex' href="https://www.github.com/leandroc0rreia"><FaGithub size={24} className={"mr-4"}/>Github</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-blue-600 p-4 rounded-l-2xl'><a className='flex' href="https://www.facebook.com/leandroc0rreia"><FaFacebook size={24} className={"mr-4"}/>Facebook</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-rose-600 p-4 rounded-l-2xl'><a className='flex' href="https://www.instagram.com/leandroc0rreia"><FaInstagram size={24} className={"mr-4"}/>Instagram</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-blue-700 p-4 rounded-l-2xl'><a className='flex' href="https://www.linkedin.com/in/leandroc0rreia"><FaLinkedin size={24} className={"mr-4"}/>LinkedIn</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-gray-500 p-4 rounded-l-2xl'><a className='flex' href="mailto:geral@leandroc0rreia.com"><FaEnvelope size={24} className={"mr-4"}/>E-mail</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home