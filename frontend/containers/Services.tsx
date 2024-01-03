'use client'

import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section className='maxContainer paddingContainer py-40 relative' id='services'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='flexBetween flex-col'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h3 className='bold-20 text-center lg:bold-24'>{t('topic')}</h3>
          <h2 className='bold-32 mb-4 text-center lg:bold-44 mt-8'>
          {t('title1')}<span className='text-green-100'>{t('title2')}</span> {t('title3')} <span className='text-green-100'>{t('title4')}</span> {t('title5')}
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>{t('description')}</p>
        </div>
        <div className='flexBetween flex-col lg:flex-row gap-12 mt-16'>
          <ServiceCard
            title={t('card1_title')}
            image='/webdesign.svg'
            description={t('card1_description')}
          />
          <ServiceCard
            title={t('card2_title')}
            image='/appcreation.svg'
            description={t('card2_description')}
          />
          <ServiceCard
            title={t('card3_title')}
            image='/systemdev.svg'
            description={t('card3_description')}
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