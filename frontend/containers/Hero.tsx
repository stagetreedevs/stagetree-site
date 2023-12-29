import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='maxContainer paddingContainer flexBetween flex-col-reverse lg:flexCenter lg:flex-row h-full z-10 pt-[200px] pb-44 lg:py-44 '>
      <div className='mt-40 relative flex flex-col lg:w-1/2 w-full max-w-[622px] lg:mt-0'>
          <h1 className='bold-44 mb-6 text-center lg:text-start lg:bold-64'>Desenvolvendo produtos digitais de <span className='text-green-100'>alto nivel</span>.</h1>
          <p className='regular-18 text-gray-20 text-center lg:text-start'>Se você precisa de sistemas online, aplicativos ou sites, nossa equipe de especialistas fornecerá soluções excepcionais que geram valor.</p>
      </div>
      <div className='flexCenter w-full h-full items-start relative'>
          <Image
            src="/astronaut.png"
            width={270}
            height={427}
            alt="astronaut"
            className='absolute z-[3] w-40 lg:w-[270px]'
          />
          <div className="crimson-ball absolute z-[2]"/> 
          <div className="yellow-ball absolute right-0 bottom-0 z-[3]"/>
      </div>
    </section>
  )
}

export default Hero