'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';

const CTA = () => {
  const t = useTranslations('CTA')

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }} className='w-full py-40 relative'>
      <div className='maxContainer paddingContainer flexBetween flex-col lg:flex-row gap-16'>
        <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'><span className='text-green-100'>{t('title1')}</span>{t('title2')}</h2>
        <div>
          <p className='regular-16 text-gray-20 text-center lg:text-start lg:regular-18 mb-6 w-full max-w-[592px]'>{t('description')}</p>
        </div>
      </div>
      <div className='hidden md:block'>
        <Image
          src='/assets/ball-lg.svg'
          width={96}
          height={96}
          alt='ball-lg'
          className='absolute right-[20px] top-[50px]'
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
          className='absolute right-[10px] top-[150px]'
        />
      </div>
      <div className='hidden md:block'>
        <Image
          src='/assets/ball-md.svg'
          width={56}
          height={56}
          alt='ball-md'
          className='absolute left-[50px] bottom-[40px]'
        />
        <Image
          src='/assets/ball-sm.svg'
          width={32}
          height={32}
          alt='ball-sm'
          className='absolute left-[10px] bottom-[80px]'
        />
      </div>
    </motion.div>
  )
}

export default CTA