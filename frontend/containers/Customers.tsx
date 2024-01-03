'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { urlFor, client } from '@/app/client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';


interface Customers {
  title: string;
  imgUrl: string
}

const Customers = () => {
  const t = useTranslations('Customers')

  const [customers, setCustomers] = useState<Customers[]>([]);

  useEffect(() => {
    const query = '*[_type == "customers"]';

    client.fetch(query).then((data) => {
      setCustomers(data);
    });
  }, []);

  return (
    <section className='w-full py-40 sectionGray'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className='maxContainer paddingContainer flexBetween flex-col gap-12'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h2 className='bold-32 mb-4 text-center lg:bold-44 mt-8'>
            {t('title1')} <span className='text-green-100'>
            {t('title2')}
            </span>
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>{t('description')}</p>
        </div>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          {customers.map((customer, key) => (
            <div className='flexCenter' key={key}>
              {customer.imgUrl && (
                <Image
                  src={urlFor(customer.imgUrl).url()}
                  alt={customer.title}
                  width={183}
                  height={85}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Customers