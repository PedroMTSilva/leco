import React from 'react'

function Footer() {
  return (
      <div className="mt-auto py-7 text-center mx-auto">
        <div className="container mx-auto lg:px-16 md:px-14 sm:px-12 px-10">
          <div className='lg:mx-12'>
            <p className='lead pb-3 justify-center mx-auto text-md text-center text-blue-600 hover:text-blue-900'>
              Design e Código feito por Leandro Correia
            </p>
            <p>
              <small className="text-muted text-gray-600">O projeto é open-source. Esteja à vontade para contribuir ou fazer a sua própria versão.</small>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Footer