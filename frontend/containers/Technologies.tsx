'use client'

import TechnologieCard from '@/components/TechnologieCard';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Technologies = () => {
    const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
    const [hoveredDescription, setHoveredDescription] = useState<string | null>(null);

    const t = useTranslations('Technologies')

    return (
        <section className='w-full py-40'>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }} className='maxContainer paddingContainer flexBetween flex-col lg:flex-row '>
                <div className='mb-20 lg:mb-0 max-w-[50%]'>
                    <h2 className='bold-32 mb-4 text-center lg:text-start lg:bold-44'>
                        <span className='text-green-100'>{t('title1')}</span> 
                        {t('title2')}
                    </h2>
                    <div className='flex-row'>
                        <p className='text-center lg:text-start'>
                            <span className='text-green-100 bold-16'>{hoveredTitle}
                            </span> {hoveredDescription || t('descriptionFixed')}
                            </p>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    <TechnologieCard
                        onHover={(title, description) => {
                            setHoveredTitle(title);
                            setHoveredDescription(description);
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Technologies;
