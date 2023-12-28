'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';


type WorksCardInfo = {
    image: string;
    title: string;
    description: string;
    tags: string[];
};

type WorksSwiperProps = {
    worksData: WorksCardInfo[];
};

const WorksSwiper: React.FC<WorksSwiperProps> = ({ worksData }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            className="mySwiper flexCenter"
            breakpoints={{
                834: {
                    slidesPerView: 2,
                }
            }}
        >
            {worksData.map((work, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <div className='w-full h-full max-w-[592px]'>
                        <Image
                            src={work.image}
                            width={592}
                            height={382}
                            alt={work.title}
                            className='mb-4 rounded-lg border-blue-100 border-1 hover:shadow-lg transition-all'
                        />
                        <h3 className='bold-24'>{work.title}</h3>
                        <p className='regular-18 text-gray-20 mb-2'>{work.description}</p>
                        <ul className="flexStart gap-2 mb-5">
                            {work.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className="regular-16 bg-gray-200 px-4 py-1">
                                    {tag}
                                </div>
                            ))}
                        </ul>
                        <Link href='/' className='text-green-100 flex flex-row flexStart bold-16'>
                            Confira o projeto
                            <HiChevronRight color="#05F29B" size={20} />
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WorksSwiper;
