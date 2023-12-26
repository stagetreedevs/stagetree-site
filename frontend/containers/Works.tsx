import WorksSwiper from '@/components/WorksSwiper'
import React from 'react'
import { WORKS_CARD_INFO } from '@/constants';

const Works = () => {
  return (
    <section className='py-40 w-full sectionGray' id='works'>
      <div className='flexCenter flex-col maxContainer paddingContainer gap-20'>
        <div className='flexBetween flex-col max-w-[1000px] w-full'>
          <h3 className='bold-20 text-center lg:bold-24'>Alguns Trabalhos</h3>
          <h2 className='bold-24 mb-6 text-center lg:text-start lg:bold-44 mt-8'>
            Criando soluções digitais <span className='text-green-100'>impressionantes</span>.
          </h2>
          <p className='regular-16 text-gray-20 text-center lg:regular-18'>Explore nosso portfólio de projetos de sucesso.</p>
        </div>
        <div className='w-full'>
          <WorksSwiper worksData={WORKS_CARD_INFO} />
        </div>
      </div>
    </section>
  )
}

export default Works