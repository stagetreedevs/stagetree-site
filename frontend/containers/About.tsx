import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='py-40 w-full sectionGray' id='about'>
      <div className='maxContainer paddingContainer flexBetween gap-20 lg:flex-row flex-col'>
        <div className='w-full max-w-[600px] flexCenter flex-col lg:items-start'>
          <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'>
            Colocando as <span className='text-green-100'>pessoas em primeiro lugar</span> no desenvolvimento de produtos digitais
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:text-start lg:regular-18 mb-6'>
            Na StageTree, acreditamos que a chave para o desenvolvimento de produtos digitais excepcionais está na nossa abordagem que prioriza as pessoas. Ao priorizar as necessidades e experiências de nossos clientes e de seus usuários, criamos soluções que realmente repercutem e entregam resultados excepcionais.
          </p>
          <Button
            type='button'
            title='Veja nosso Linkdln'
            variant='Arrow'
          />
        </div>
        <div>
          <Image
            src="/meeting.png"
            width={488}
            height={592}
            alt="meeting"
            className='shadow-lg rounded-lg w-80 lg:w-[488px]'
          />
        </div>
      </div>
    </section>
  )
}

export default About