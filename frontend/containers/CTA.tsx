'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className='w-full py-40 relative'>
      <div className='maxContainer paddingContainer flexBetween flex-col lg:flex-row gap-16'>
        <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'><span className='text-green-100'>Transformando</span> sua experiência com produtos digitais</h2>
        <p className='regular-16 text-gray-20 text-center lg:text-start lg:regular-18 mb-6 w-full max-w-[592px]'>Na StageTree, nos especializamos no desenvolvimento de produtos digitais de última geração que atendem às necessidades do seu negócio. Desde sistemas on-line intuitivos até aplicativos fáceis de usar e sites impressionantes, temos a experiência necessária para dar vida às suas ideias. Contate-nos hoje para discutir seu projeto e levar sua presença digital para o próximo nível.</p>
      </div>
      <div className=''>
        <Image
          src='/assets/ball-lg.svg'
          width={96}
          height={96}
          alt='ball-lg'
          className='absolute right-[20px] top-[60px]'
        />
        <Image
          src='/assets/ball-md.svg'
          width={56}
          height={56}
          alt='ball-md'
          className='absolute right-[120px] top-[40px]'
        />
        <Image
          src='/assets/ball-sm.svg'
          width={32}
          height={32}
          alt='ball-sm'
          className='absolute right-[10px] top-[160px]'
        />
      </div>
    </motion.div>
  )
}

export default CTA