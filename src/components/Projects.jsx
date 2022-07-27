import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className="w-full px-16 mb-16 pt-[10%]">
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='basis-1/5'></div>
          <div className='basis-3/5'>
            <p className='lg:text-8xl md:text-8xl sm:text-5xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400'>Projetos</p>
          </div>
          <div className='basis-1/5'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects