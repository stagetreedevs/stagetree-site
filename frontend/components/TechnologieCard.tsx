'use client'

import React, { useState, useEffect, MouseEventHandler } from 'react';
import Image from 'next/image';
import { urlFor, client } from '@/app/client';
import { useParams } from 'next/navigation';

type TechnologieCardProps = {
    onHover: (title: string | null, description: string | null) => void;
};

interface Technology {
    title: string;
    descriptionPT: string;
    descriptionES: string;
    descriptionEN: string;
    imgUrl: string
}

const TechnologieCard: React.FC<TechnologieCardProps> = ({ onHover }) => {
    const [hoveredTechnology, setHoveredTechnology] = useState<number | null>(null);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const params = useParams();

    const currentLocale = String(params.locale).toUpperCase()
const selectedDescription = `description${currentLocale}` as 'descriptionPT' | 'descriptionES' | 'descriptionEN'

useEffect(() => {
    const query = '*[_type == "technologies"] | order(order asc)'; // Adiciona a ordenação aqui

    client.fetch(query)
        .then((data: Technology[]) => {
            setTechnologies(data); // As tecnologias são definidas aqui já ordenadas
        })
        .catch((error) => {
            console.error('Error fetching technologies:', error);
        });
}, []);


    

    return (
        <>
            {technologies.map((technology, index) => (
                <div
                    key={index}
                    className={`w-[100px] h-[100px] rounded-lg border-3 flexCenter transition-all delay-100 hover:shadow-lg p-5 hover:border-green-100 ${hoveredTechnology === index ? 'hovered' : ''}`}
                    onMouseEnter={() => {
                        setHoveredTechnology(index);
                        onHover(technology.title, technology[selectedDescription]);
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
