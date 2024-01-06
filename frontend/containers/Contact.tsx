'use client'

import Link from 'next/link'
import React from 'react'
import { HiMail, HiPhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('Contact')


  return (
    <section className='w-full sectionGray py-40' id='contact'>
      <div className='maxContainer paddingContainer flexBetween flex-col gap-16'>
        <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}>
          <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'>{t('title1')}<span className='text-green-100'>{t('title2')}</span> </h2>
        </motion.div>
        <div className='flexBetween w-full gap-10 flex-col lg:flex-row'>
        <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiMail
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>{t('title_email')}</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>{t('decription_email')}</p>
            <Link
              href='mailto: stagetree.ti@gmail.com'
              target='_blank'
              className='underline text-gray-50 hover:text-green-100 transition-all hover:font-bold'
            >
              stagetree.ti@gmail.com
            </Link>
          </motion.div>
          <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7 }} className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiPhone
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>{t('title_phone')}</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>{t('description_phone')}</p>
            <Link
              href='tel: +5585999670502'
              target='_blank'
              className='underline text-gray-50 hover:text-green-100 transition-all hover:font-bold'
            >
              +55 (85) 9 9967-0502
            </Link>
          </motion.div>
          <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }} className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiOutlineLocationMarker
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>{t('title_hq')}</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>{t('description_hq')}</p>
            <Link
              href='https://maps.app.goo.gl/uTh4iHp3iuLNcPgMA'
              target='_blank'
              className='underline text-gray-50 hover:text-green-100 transition-all text-center lg:text-start hover:font-bold'
            >
              117 Rua Pedro Gomes, São Gonçalo do Amarante , Brazil
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact