'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CTA = () => {
  const t = useTranslations('CTA')

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }} className='w-full py-40 relative maxContainer paddingContainer'>
      <div className='flexBetween flex-col lg:flex-row gap-16  h-full'>
        <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44 w-full lg:max-w-[50%]'><span className='text-green-100'>{t('title1')}</span>{t('title2')}</h2>
        <div>
          <p className='regular-16 text-gray-20 text-center lg:text-start lg:regular-18 mb-6 w-full max-w-[600px]'>{t('description')}</p>
        </div>
      </div>
      <Image
        src='/assets/triangles.svg'
        width={96}
        height={96}
        alt='ball-lg'
        className='absolute right-[-90px] bottom-[20px] hidden lg:block'
      />
      <Image
        src='/assets/triangles.svg'
        width={96}
        height={96}
        alt='ball-lg'
        className='absolute left-[-90px] top-[20px] hidden lg:block'
      />
    </motion.div>
  )
}

export default CTA