import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="flex lg:text-10xl md:text-8xl sm:text-6xl text-5xl font-black mx-auto">
          <div className='flex'>
            <div className="text-yellow-500">Le</div>
            andro&nbsp;
          </div>
          <div className='flex'>
            <div className="text-blue-600">Co</div>
            rreia
          </div>
        </div>
        <div className="lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-bold mb-4 text-gray-900 mx-auto">
          Software Developer
        </div>
      </div>
    </div>
  )
}

export default Home