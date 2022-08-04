import React from 'react'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import data from '../config.json'

const homeData = data.pt.home
const socialMedia = {"github": "Github", "facebook": "Facebook", "instagram": "Instagram", "linkedin": "Linkedin", "email": "Email"}

const Home = () => {
  return (
    <div name='home' className='w-full h-screen dark:bg-warm-gray-900'>
      {/* Leco Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full ">
        <div className="flex lg:text-10xl md:text-8xl sm:text-6xl text-5xl font-black text-warm-gray-900 dark:text-warm-gray-50 mx-auto">
          <div className='flex'>
            <div className="text-yellow-400">{homeData.leName}</div>
            {homeData.androName}&nbsp;
          </div>
          <div className='flex'>
            <div className="text-blue-600">{homeData.coName}</div>
            {homeData.rreiaName}
          </div>
        </div>
        <div className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-black mb-4 text-warm-gray-900 dark:text-warm-gray-50 mx-auto">
          {homeData.role}
        </div>
      </div>
      {/* Social Media */}
      <div className="hidden md:flex flex-col fixed right-0 top-[35%] z-10">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-warm-gray-900 dark:bg-warm-gray-700 p-4 rounded-l-2xl'><a className='flex' href="https://www.github.com/leandroc0rreia"><FaGithub size={24} className={"mr-4"}/>{socialMedia.github}</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-blue-600 p-4 rounded-l-2xl'><a className='flex' href="https://www.facebook.com/leandroc0rreia"><FaFacebook size={24} className={"mr-4"}/>{socialMedia.facebook}</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-red-600 p-4 rounded-l-2xl'><a className='flex' href="https://www.instagram.com/leandroc0rreia"><FaInstagram size={24} className={"mr-4"}/>{socialMedia.instagram}</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-blue-700 p-4 rounded-l-2xl'><a className='flex' href="https://www.linkedin.com/in/leandroc0rreia"><FaLinkedin size={24} className={"mr-4"}/>{socialMedia.linkedin}</a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium mr-[-110px] hover:ml-[-100px] duration-300 bg-gray-500 p-4 rounded-l-2xl'><a className='flex' href="mailto:geral@leandroc0rreia.com"><FaEnvelope size={24} className={"mr-4"}/>E-{socialMedia.email}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home