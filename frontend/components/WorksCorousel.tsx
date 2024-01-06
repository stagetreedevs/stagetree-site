import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronRight, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { urlFor, client } from '@/app/client'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { flushSync } from 'react-dom';
import Autoplay from 'embla-carousel-autoplay'

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

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

export const WorksCarousel: React.FC<WorksSwiperProps> = ({ worksData }) => {
    const t = useTranslations();
    const params = useParams();

    console.log(params)

    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 1,
        loop: true,
        
    }, [Autoplay({delay: 5000})]);

    const [tweenValues, setTweenValues] = useState<number[]>([])

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
            const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
            return numberWithinRange(tweenValue, 0.3, 1)
        })
        setTweenValues(styles)
    }, [emblaApi, setTweenValues])

    console.log(tweenValues)

    // useEffect(() => {
    //     if (!emblaApi) return;

    //     onSelect(emblaApi);

    //     emblaApi.on('reInit', onSelect);
    //     emblaApi.on('select', onSelect);
    // }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi) return

        onScroll()
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll())
        })

        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])

    const currentLocale = String(params.locale).toUpperCase()
    const selectedDescription = `description${currentLocale}` as 'descriptionPT' | 'descriptionES' | 'descriptionEN'

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div className="embla overflow-hidden h-full" ref={emblaRef}>
                <div className="embla__container flex w-full h-full">
                    {worksData.map((work, index) => (
                        <div key={index} className="embla__slide flex-[0_0_50%]" style={{
                            ...(tweenValues.length && { opacity: tweenValues[index] })
                        }}>
                            <div className='relative'>
                                <Image
                                    src={urlFor(work.imgUrl).url()}
                                    width={592}
                                    height={382}
                                    alt={work.title}
                                    className='mb-4 rounded-lg border-gray-400 border-[0.5px] hover:shadow-lg transition-all'
                                />

                                <h3 className='bold-24'>{work.title}</h3>
                                <p className='regular-18 text-gray-20 mb-4'>{work[selectedDescription]}</p>
                                <ul className="flexStart gap-2 mb-5">
                                    {work.tags?.map((tag, tagIndex) => (
                                        <div key={tagIndex} className="regular-16 bg-gray-200 px-4 py-1">
                                            {tag}
                                        </div>
                                    ))}
                                </ul>
                                <Link href={work.projectLink} className='text-green-100 flex flex-row flexStart bold-16' target='_blank'>
                                    Confira o projeto
                                    <HiChevronRight color="#05F29B" size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};
