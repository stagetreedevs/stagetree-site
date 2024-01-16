'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ServiceCardProps = {
    image: string;
    title: string;
    description: string
}

const ServiceCard = ({image, title, description} : ServiceCardProps) => {
    return (
        <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, type: 'tween' }} className='bg-white-50 w-full max-w-[300px] h-full max-h-[390px] flexCenter flex-col hover:shadow-lg transition-all px-8 py-[40px] rounded-lg hover:bg-white-90'>
            <Image
                src={image}
                width={223}
                height={166}
                alt={title}
            />
            <h2 className='bold-20 mt-8 mb-4 text-center min-h-[64px] flexCenter lg:bold24'>{title}</h2>
            <p className='regular-14 text-gray-20 text-center'>{description}</p>
        </motion.div>
    )
}

export default ServiceCard