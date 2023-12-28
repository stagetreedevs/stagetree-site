'use client'

import TechnologieCard from '@/components/TechnologieCard';
import React, { useState } from 'react';
import { TECHNOLOGIES_STAGE } from '@/constants';

const Technologies = () => {
    const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
    const [hoveredDescription, setHoveredDescription] = useState<string | null>(null);

    return (
        <section className='w-full py-40'>
            <div className='maxContainer paddingContainer flexBetween flex-col lg:flex-row '>
                <div className='mb-20 lg:mb-0'>
                    <h2 className='bold-24 mb-4 text-center lg:text-start lg:bold-44'>
                        <span className='text-green-100'>Tecnologias</span> que usamos
                    </h2>
                    <p className='text-center lg:text-start'>{hoveredDescription || 'São apenas ferramentas que usamos para criar experiências incríveis e valiosas.'}</p>
                </div>
                <TechnologieCard
                    onHover={(title, description) => {
                        setHoveredTitle(title);
                        setHoveredDescription(description);
                    }}
                />
            </div>
        </section>
    );
};

export default Technologies;
