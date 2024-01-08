import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi';
import { urlFor, client } from '@/app/client'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

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
                effect={'coverflow'}
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
                    delay: 50000,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full max-w-[1000px] py-[50px]"
            >
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
                            <Link href={work.projectLink} className='text-green-100 flex flex-row flexStart bold-16 hover:underline hover:text-blue-100 transition-all' target='_blank'>
                                Confira o projeto
                                {/* <span className='hover:text-blue-100'>
                                    <HiChevronRight color="#05F29B" size={20} />
                                </span> */}
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
