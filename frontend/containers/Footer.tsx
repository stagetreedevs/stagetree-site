import { SOCIAL_STAGE } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-10 w-full'>
      <div className='maxContainer paddingContainer flex-col flexBetween'>
        <div className='border-b-2 flexBetween flex-col lg:flex-row w-full mb-10 pb-10 gap-10'>
          <div className='w-full max-w-[384px] flexCenter lg:items-start flex-col gap-8'>
            <Image
              src='/stagetree_logo_3.svg'
              width={130}
              height={73}
              alt='StageTree'
            />
            <p className='regular-18 text-gray-20  text-center lg:text-start'>Somos uma empresa de tecnologia especializada na criação de sistemas para web, sites e aplicações, com foco nas pessoas e na evolução.</p>
          </div>
            <ul className="flex gap-3">
              {SOCIAL_STAGE.map((link) => (
                <Link href={link.href} key={link.key} target='_blank'>
                  {link.key === 'linkdln' && <FaLinkedin size={30}/>}
                  {link.key === 'behance' && <FaBehance size={30}/>}
                  {link.key === 'instagram' && <FaInstagram size={30}/>}
                </Link>
              ))}
            </ul>
        </div>
        <p className='regular-12'>© 2023 StageTree. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer