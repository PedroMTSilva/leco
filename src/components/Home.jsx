import React from 'react'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import data from '../config.json'

const homeData = data.pt.home
const socialMedia = data.social_media

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
      <div className="hidden md:flex flex-col fixed left-0 top-[35%] z-10">
        <ul>
          <a className='flex' href={socialMedia.github.url}><li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-warm-gray-900 dark:bg-warm-gray-700 p-4 rounded-r-2xl'>{socialMedia.github.text}<FaGithub size={24} className={"mr-1"}/></li></a>
          <a className='flex' href={socialMedia.facebook.url}><li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-blue-600 p-4 rounded-r-2xl'>{socialMedia.facebook.text}<FaFacebook size={24} className={"mr-1"}/></li></a>
          <a className='flex' href={socialMedia.instagram.url}><li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-red-600 p-4 rounded-r-2xl'>{socialMedia.instagram.text}<FaInstagram size={24} className={"mr-1"}/></li></a>
          <a className='flex' href={socialMedia.linkedin.url}><li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-blue-700 p-4 rounded-r-2xl'>{socialMedia.linkedin.text}<FaLinkedin size={24} className={"mr-1"}/></li></a>
          <a className='flex' href={socialMedia.email.url}><li className='w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-gray-500 p-4 rounded-r-2xl'>{socialMedia.email.text}<FaEnvelope size={24} className={"mr-1"}/></li></a>
        </ul>
      </div>
    </div>
  )
}

export default Home