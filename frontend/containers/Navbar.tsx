'use client'

import Button from '@/components/Button';
import LanguagesDropdown from '@/components/LanguagesDropdown';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const t = useTranslations('Navbar')

  return (
    <nav className=' w-full border-b-2 fixed z-20 glassMorphism'>
      <div className='maxContainer paddingContainer flexBetween py-3 relative z-300 '>
        <Link href='/' className=''>
          <Image
            src="/stagetree_logo_1.svg"
            width={160}
            height={39}
            alt="Logo"
          />
        </Link>
        <div className='gap-3 hidden h-full lg:flexCenter'>
          <ul className="flex gap-3">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="bold-16 hover:text-green-100">
                {t(link.label)}
              </Link>
            ))}
          </ul>

          <Button
            type='button'
            title={t('contact')}
            variant='Annotation'
          />

          <LanguagesDropdown />
        </div>

        <div onClick={toggleMenu} className="cursor-pointer lg:hidden bg-green-100 p-2 rounded-lg shadow-lg">
          <HiMenu
            size={24}
            color='#eeeeee'
          />
        </div>

        {menuOpen && (
          <div className="fixed top-0 right-0 h-auto w-full bg-slate-100 z-50 pb-10 maxContainer paddingContainer rounded-b-lg">
            <div onClick={toggleMenu} className="flexBetween border-b-1 py-3">
              <Image
                src='/stagetree_logo_2.svg'
                width={38}
                height={39}
                alt='StageTree'
              />
              <div onClick={toggleMenu} className="inline-block cursor-pointer lg:hidden bg-green-100 p-2 rounded-lg shadow-lg">
                <HiX
                  size={24}
                  color='#eeeeee'
                />
              </div>

            </div>
            <div className='flexBetween'>
              <ul className="flex flex-col gap-3 mt-5">
                {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key} className="bold-16 hover:text-green-100">
                    {t(link.label)}
                  </Link>
                ))}
              </ul>
              <div className='mr-2'>
                <LanguagesDropdown />
              </div>
            </div>
          </div>
        )}
        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  )
}

export default Navbar