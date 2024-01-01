'use client'

import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='maxContainer paddingContainer py-40 relative' id='services'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='flexBetween flex-col'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h3 className='bold-20 text-center lg:bold-24'>Inovação</h3>
          <h2 className='bold-32 mb-4 text-center lg:bold-44 mt-8'>
            Transformando <span className='text-green-100'>ideais</span> em <span className='text-green-100'>soluções</span> digitais poderosas
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>Na StageTree, nos especializamos em fornecer soluções digitais de primeira linha para o seu negócio. Nossos serviços incluem desenvolvimento de sistemas, criação de aplicativos e design de sites, todos voltados para ajudá-lo a atingir seus objetivos.</p>
        </div>
        <div className='flexBetween flex-col lg:flex-row gap-12 mt-16'>
          <ServiceCard
            title="Website Design"
            image='/webdesign.svg'
            description='Criamos sites visualmente impressionantes que geram resultados.'
          />
          <ServiceCard
            title="App Creation"
            image='/appcreation.svg'
            description='Nossa equipe de programadores pode dar vida às suas ideias de aplicativos para seu negócio.'
          />
          <ServiceCard
            title="Desenvolvimento de Sistemas"
            image='/systemdev.svg'
            description='Desenvolvemos sistemas robustos e escaláveis adaptados às suas necessidades específicas.'
          />
        </div>
      <Image
          src='/assets/triangles.svg'
          width={96}
          height={96}
          alt='ball-lg'
          className='absolute right-[-80px] top-[60px] hidden lg:block'
        />
      <Image
          src='/assets/triangles.svg'
          width={96}
          height={96}
          alt='ball-lg'
          className='absolute left-[-80px] bottom-[60px] hidden lg:block'
        />
      </motion.div>

    </section>
  )
}

export default Services