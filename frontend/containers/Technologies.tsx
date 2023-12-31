'use client'

import React, { useState, useEffect, MouseEventHandler } from 'react';
import Image from 'next/image';
import { urlFor, client } from '@/app/client';

type TechnologieCardProps = {
    onHover: (title: string | null, description: string | null) => void;
};

interface Technology {
    title: string;
    description: string;
    imgUrl: string
}

const TechnologieCard: React.FC<TechnologieCardProps> = ({ onHover }) => {
    const [hoveredTechnology, setHoveredTechnology] = useState<number | null>(null);
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        const query = '*[_type == "technologies"]'; // Corrigir para "technologies"

        client.fetch(query)
            .then((data: Technology[]) => {
                setTechnologies(data);
            })
            .catch((error) => {
                console.error('Error fetching technologies:', error);
            });
    }, []);

    console.log(technologies);

    return (
        <>
            {technologies.map((technology, index) => (
                <div
                    key={index}
                    className={`w-[100px] h-[100px] rounded-lg border-3 flexCenter transition-all delay-100 hover:shadow-lg hover:border-green-100 ${hoveredTechnology === index ? 'hovered' : ''}`}
                    onMouseEnter={() => {
                        setHoveredTechnology(index);
                        onHover(technology.title, technology.description);
                    }}
                    onMouseLeave={() => {
                        setHoveredTechnology(null);
                        onHover(null, null);
                    }}
                >
                    <Image src={urlFor(technology.imgUrl).url()} alt={technology.title} width={80} height={80} />
                </div>
            ))}
        </>
    );
};

export default TechnologieCard;
