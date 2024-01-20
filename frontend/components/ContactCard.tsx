'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { HiMail, HiPhone, HiOutlineLocationMarker } from 'react-icons/hi'

type ContactCardProps = {
    type: 'email' | 'phone' | 'location';
    title: string;
    description: string;
    linkHref: string;
    linkTitle: string
}

const ContactCard = ({ type, title, description, linkHref, linkTitle }: ContactCardProps) => {

    const getIcon = () => {
        switch (type) {
            case 'email':
                return <HiMail
                    size={50}
                    color='#010326'
                />;
            case 'phone':
                return <HiPhone
                    size={50}
                    color='#010326'
                />;
            case 'location':
                return <HiOutlineLocationMarker
                    size={50}
                    color='#010326'
                />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: 'tween' }} className='bg-white-90 w-full max-w-[380px] h-full max-h-[390px]  hover:shadow-lg transition-all rounded-lg hover:bg-slate-50'>
            <Link
                href={linkHref}
                target='_blank'
                className='flexCenter flex lg:items-start flex-col px-8 py-[40px]'
            >
                {getIcon()}
                <h2 className='bold-20 mt-1 mb-1 text-center min-h-[64px] flexCenter lg:bold24'>{title}</h2>
                <p className='regular-16 text-gray-50 mb-4 text-center lg:text-start'>{description}</p>
                <Link
                    href={linkHref}
                    target='_blank'
                    className='underline text-gray-50 hover:text-green-100 transition-all hover:font-bold text-center lg:text-start'
                >
                    {linkTitle}
                </Link>
            </Link>
        </motion.div>
    )
}

export default ContactCard