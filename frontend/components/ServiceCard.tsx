import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
    image: string;
    title: string;
    description: string
}

const ServiceCard = ({image, title, description} : ServiceCardProps) => {
    return (
        <div className='bg-white-50 w-full max-w-[300px] h-full max-h-[390px] flexCenter flex-col hover:shadow-lg transition-all px-8 py-[40px] rounded-lg hover:bg-white-90'>
            <Image
                src={image}
                width={223}
                height={166}
                alt={title}
            />
            <h4 className='bold-20 mt-8 mb-4 text-center min-h-[64px] flexCenter lg:bold24'>{title}</h4>
            <p className='regular-14 text-gray-20 text-center'>{description}</p>
        </div>
    )
}

export default ServiceCard