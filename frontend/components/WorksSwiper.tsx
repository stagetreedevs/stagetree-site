'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { HiChevronRight, HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';


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
    const swiperRef = useRef<Swiper | null>(null);

    return (
        <>
            <Swiper
                modules={[Navigation]}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerGroup={1}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
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
            <div className='mt-8'>
                <div className='gap-2 flexCenter'>
                    <button className="prev-button-custom bg-green-100 p-3 rounded-[100px] shadow-md hover:bg-blue-100 transition-all" onClick={() => swiperRef.current.slidePrev()}>
                        <HiArrowLeft color='#eeeeee' />
                    </button>
                    <button className="next-button-custom bg-green-100 p-3 rounded-[100px] shadow-md hover:bg-blue-100 transition-all" onClick={() => swiperRef.current.slideNext()}>
                        <HiArrowRight color='#eeeeee' />
                    </button>
                </div>
            </div>

        </>
    );
};

export default WorksSwiper;