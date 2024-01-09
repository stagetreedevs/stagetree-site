import React, { useCallback, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { urlFor, client } from '@/app/client'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';


// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

type WorksCardInfo = {
    title: string;
    descriptionPT: string;
    descriptionES: string;
    descriptionEN: string;
    projectLink: string;
    imgUrl: string;
    tags: string[];
};

type WorksSwiperProps = {
    worksData: WorksCardInfo[];
};

export const WorksCarousel: React.FC<WorksSwiperProps> = ({ worksData }) => {
    const t = useTranslations();
    const params = useParams();
    console.log(params)

    const currentLocale = String(params.locale).toUpperCase()
    const selectedDescription = `description${currentLocale}` as 'descriptionPT' | 'descriptionES' | 'descriptionEN'

    return (
        <div className=''>
            <Swiper
                
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 80,
                    depth: 10,
                    modifier: 1,
                    slideShadows: false,
                }}
                watchSlidesProgress={true}
                autoplay={{
                    delay: 15000,
                }}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="w-full max-w-[1000px] py-[50px] relative"
            >
                <button className='swiper-button-next w-[80px] h-full absolute top-0 right-0 z-10 hidden lg:block'></button>
                {worksData.map((work, index) => (
                    <SwiperSlide className='bg-center bg-cover max-w-[700px] h-[400px]'>
                        <div className='flexCenter flex-col'>
                            <Image
                                src={urlFor(work.imgUrl).url()}
                                width={592}
                                height={382}
                                alt={work.title}
                                className='mb-4 rounded-lg border-gray-400 border-[0.5px] hover:shadow-lg transition-all'
                            />

                            <h3 className='bold-24'>{work.title}</h3>
                            <p className='regular-18 text-gray-20 mb-4 text-center max-w-[592px]'>{work[selectedDescription]}</p>
                            <ul className="flexStart gap-2 mb-5">
                                {work.tags?.map((tag, tagIndex) => (
                                    <div key={tagIndex} className="regular-16 bg-gray-200 px-4 py-1">
                                        {tag}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
                <button className='swiper-button-prev w-[80px] h-full absolute top-0 left-0 z-10 hidden lg:block'></button>

                <div className='w-full flexCenter mt-8 gap-3 lg:hidden'>

                    <button className="swiper-button-prev w-[40px] h-[40px] flexCenter bg-green-100 rounded-[100%]"><HiChevronLeft size={22} color='#eee' /></button>
                    <button className="swiper-button-next w-[40px] h-[40px] flexCenter bg-green-100 rounded-[100%]"><HiChevronRight size={22} color='#eee' /></button>
                </div>

            </Swiper>
        </div>
    );
};
