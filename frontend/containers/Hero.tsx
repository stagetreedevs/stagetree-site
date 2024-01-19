import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Tooltip } from "@nextui-org/react";


const Hero = () => {
  const t = useTranslations("Hero");

  return (

    <section className='maxContainer paddingContainer flexBetween flex-col-reverse lg:flex-row h-full py-20 relative'>

      <div className='mt-8 relative flex flex-col lg:w-1/2 w-full lg:mt-0 '>
        <h1 className='bold-32 md-bold-44 mb-6 text-center lg:text-start lg:bold-64'>{t("title")}<span className='text-green-100'>{t("title2")} </span>{t("title3")}</h1>
        <p className='regular-18 text-gray-20 text-center lg:text-start'>{t("description")}</p>
      </div>

      <div className='flexCenter w-full lg:w-[50%] lg:h-[500px] h-[250px] items-start relative lg:mt-0'>
        <Image
          src="/hero-image.svg"
          width={333}
          height={455}
          alt="tree"
          className='absolute z-[6] w-40 lg:w-[300px] hero-image'
          priority={true}
        />
        <Tooltip content='Devops'>
          <div className='absolute z-[7] bg-slate-200 rounded-[50%] shadow-xl left-[70px]'>
            <Image
              src="/devops.svg"
              width={44}
              height={20}
              alt="devops"
              className='p-4'
            />

          </div>
        </Tooltip>
        <Tooltip content={t("devlopment")}>
        <div className='absolute z-[7] bg-slate-200 rounded-[50%] shadow-xl right-[50px] bottom-[60px] lg:bottom-[120px]'>
          <Image
            src="/devicon.svg"
            width={24}
            height={24}
            alt="devops"
            className='p-4'
          />
        </div>
        </Tooltip>
        <Tooltip content={t("ai")}>
        <div className='absolute z-[7] bg-slate-200 rounded-[50%] shadow-xl right-[70px] top-[20px] lg:top-[100px]'>
          <Image
            src="/iaicon.svg"
            width={32}
            height={32}
            alt="devops"
            className='p-4'
          />
        </div>
        </Tooltip>
        <div className='absolute w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-[#bfc0c1] rounded-[50%] blur-[800px] opacity-[.9]'>
        </div>
      </div>
      <div className='absolute w-[2px] h-10 left-[50%] bg-blue-100 opacity-20 bottom-0 z-20 mb-[-20px] rounded-lg'></div>
    </section>
  )
}

export default Hero