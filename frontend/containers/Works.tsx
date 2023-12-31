'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { WorksCarousel } from '@/components/WorksCorousel';
import { client } from '@/app/client';

import { useTranslations } from 'next-intl'

type WorksCardInfo = {
  title: string;
  descriptionPT: string;
  descriptionES: string;
  descriptionEN: string;
  projectLink: string;
  imgUrl: string;
  tags: string[];
};


const Works = () => {
  const [worksData, setWorksData] = useState<WorksCardInfo[]>([]);

  const t = useTranslations('Works');

  useEffect(() => {
    const query = '*[_type == "works"]'; // Certifique-se de que o tipo corresponde ao nome definido no seu schema do Sanity

    client.fetch(query)
      .then((data: WorksCardInfo[]) => {
        setWorksData(data);
      })
      .catch((error) => {
        console.error('Error fetching works data:', error);
      });
  }, []);

  return (
    <section className='py-40 w-full sectionGray' id='works'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='flexCenter flex-col maxContainer paddingContainer gap-20'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h3 className='bold-20 text-center lg:bold-24'>{t('topic')}</h3>
          <h2 className='bold-32 mb-6 text-center lg:bold-44 mt-8 w-full'>
            {t('title1')}
            <span className='text-green-100'>{t('title2')}</span>
            {t('title3')}
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>{t('description')}</p>
        </div>
        <div className='w-full'>
          <WorksCarousel worksData={worksData} />
        </div>
      </motion.div>
    </section>
  )
}

export default Works;