'use client'

import React from 'react'
import { WORKS_CARD_INFO } from '@/constants';
import { motion } from 'framer-motion';
import { WorksCarousel } from '@/components/WorksCorousel';

const Works = () => {
  return (
    <section className='py-40 w-full sectionGray' id='works'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} 
        className='flexCenter flex-col maxContainer paddingContainer gap-20'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h3 className='bold-20 text-center lg:bold-24'>Alguns Trabalhos</h3>
          <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44 mt-8'>
            Criando soluções digitais <span className='text-green-100'>impressionantes</span>.
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>Explore nosso portfólio de projetos de sucesso.</p>
        </div>
        <div className='w-full'>
          <WorksCarousel worksData={WORKS_CARD_INFO} />
        </div>
      </motion.div>
    </section>
  )
}

export default Works