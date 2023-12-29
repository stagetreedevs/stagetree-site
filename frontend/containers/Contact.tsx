import Link from 'next/link'
import React from 'react'
import { HiMail, HiPhone, HiOutlineLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <section className='w-full sectionGray py-40'>
      <div className='maxContainer paddingContainer flexBetween flex-col gap-16'>
        <div>
          <h2 className='bold-32 mb-6 text-center lg:text-start lg:bold-44'>Entre em <span className='text-green-100'>Contato</span> </h2>
        </div>
        <div className='flexBetween w-full gap-10 flex-col lg:flex-row'>
          <div className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiMail
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>Email</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>Sinta-se à vontade para entrar em contato conosco caso tenha alguma dúvida.</p>
            <Link
              href='mailto: contato@stagetree.com'
              target='_blank'
              className='underline hover:text-green-100 transition-all'
            >
              contato@stagetree.com
            </Link>
          </div>
          <div className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiPhone
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>Telefone</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>Nossa equipe está aqui para ajudá-lo no que pudermos. Também via Whatsapp.</p>
            <Link
              href='tel: contato@stagetree.com'
              target='_blank'
              className='underline hover:text-green-100 transition-all'
            >
              +55 (85) 99999-9999
            </Link>
          </div>
          <div className='w-full max-w-[384px] flexCenter flex lg:items-start flex-col'>
            <HiOutlineLocationMarker
              size={50}
              color='#010326'
            />
            <h3 className='bold-24 mt-8'>QG</h3>
            <p className='regular-18 text-gray-50 mb-8 mt-4 text-center lg:text-start'>Esperamos ver você em breve.</p>
            <Link
              href='https://maps.app.goo.gl/uTh4iHp3iuLNcPgMA'
              target='_blank'
              className='underline hover:text-green-100 transition-all text-center lg:text-start'
            >
              117 Rua Pedro Gomes, São Gonçalo do Amarante , Brazil
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact