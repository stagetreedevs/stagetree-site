import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronRight, HiArrowLeft, HiArrowRight } from 'react-icons/hi';

type WorksCardInfo = {
    image: string;
    title: string;
    description: string;
    tags: string[];
};

type WorksSwiperProps = {
    worksData: WorksCardInfo[];
};


export const WorksCarousel: React.FC<WorksSwiperProps> = ({ worksData }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 2,
    })
    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)

        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div className="embla overflow-hidden h-full" ref={emblaRef}>
                <div className="embla__container flex w-full h-full gap-8">
                    {worksData.map((work, index) => (
                        <div key={index} className="embla__slide flex-[0_0_calc(50%_-_32px)]">
                            <div className='relative'>
                                <Image
                                    src={work.image}
                                    width={592}
                                    height={400}
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
                        </div>
                    ))}
                </div>

                <div className='mt-8'>
                    <div className='gap-2 flexCenter'>
                        <button className=" bg-green-100 p-3 rounded-[100px] shadow-md hover:bg-blue-100 transition-all disabled:opacity-40"
                            style={{ opacity: !emblaApi?.canScrollPrev() ? '50%' : '100%' }}
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                        >
                            <HiArrowLeft color='#eeeeee' />
                        </button>
                        <button className=" bg-green-100 p-3 rounded-[100px] shadow-md hover:bg-blue-100 transition-all disabled:opacity-40"
                            style={{ opacity: !emblaApi?.canScrollNext() ? '50%' : '100%' }}
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                        >
                            <HiArrowRight color='#eeeeee' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
