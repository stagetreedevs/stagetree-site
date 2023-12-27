'use client'

import React from 'react'
import { COUSTOMERS_LOGO } from '@/constants'
import Image from 'next/image'

const Customers = () => {
  return (
    <section className='w-full py-40 sectionGray'>
      <div className='maxContainer paddingContainer flexBetween flex-col gap-12'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h2 className='bold-24 mb-4 text-center lg:bold-44 mt-8'>
            Alguns <span className='text-green-100'>
              Clientes
            </span>
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>Empresas que confiam na Stage Tree para ajudar em seus negócios de TIC.</p>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
          {COUSTOMERS_LOGO.map((image) => (
            <Image
              src={image.image}
              alt={image.title}
              width={183}
              height={85}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Customers