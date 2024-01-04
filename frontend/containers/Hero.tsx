import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'


const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <>
      <section className='maxContainer paddingContainer flexBetween flex-col-reverse lg:flexCenter lg:flex-row h-full z-10 pt-[200px] pb-44 lg:py-44 relative'>
        <div className='mt-40 relative flex flex-col lg:w-1/2 w-[50%] max-w-[622px] lg:mt-0'>
          <h1 className='bold-32 md-bold-44 mb-6 text-center lg:text-start lg:bold-64'>{t("title")}<span className='text-green-100'>{t("title2")} </span>{t("title3")}</h1>
          <p className='regular-18 text-gray-20 text-center lg:text-start'>{t("description")}</p>
        </div>
        <div className='flexCenter w-[50%] h-full items-start relative'>
          <Image
            src="/hero-image.svg"
            width={270}
            height={458}
            alt="astronaut"
            className='absolute z-[4] w-40 lg:w-[300px] hero-image'
          />
          <div className="crimson-ball absolute z-[2]" />
          <div className="yellow-ball absolute right-0 bottom-0 z-[3]" />
        <div className=''>
          <div className="green-planet absolute z-[4] left-20" />
          <div className="yellow-planet absolute right-96 bottom-0 z-[3]" />
          <div className="crimson-planet absolute right-28 bottom-32 z-[3]" />
          <div className="blue-planet absolute right-10 top-40 z-[3]" />
        </div>
        </div>
        <div className='absolute w-[2px] h-10 left-[50%] bg-blue-100 opacity-20 bottom-0 z-20 mb-[-20px] rounded-lg'>
        </div>
      </section>

    </>
  )
}

export default Hero