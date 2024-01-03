'use client'

import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations("About");
  return (
    <section className='py-40 w-full sectionGray' id='about'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='maxContainer paddingContainer flexBetween gap-20 lg:flex-row flex-col'
      >
        <div className='w-full max-w-[600px] flexCenter flex-col lg:items-start'>
          <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'>
            {t('title')}<span className='text-green-100'>{t('title2')}</span>{t('title3')}
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:text-start lg:regular-18 mb-6'>
          {t('description')}
          </p>
          <Button
            type='button'
            title={t('contact')}
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
      </motion.div>
    </section>
  )
}

export default About