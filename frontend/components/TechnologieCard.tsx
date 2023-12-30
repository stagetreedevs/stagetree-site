// TechnologieCard.tsx

import React, { useState, MouseEventHandler } from 'react';
import { TECHNOLOGIES_STAGE } from '@/constants';
import Image from 'next/image';

type TechnologieCardProps = {
    onHover: (title: string | null, description: string | null) => void;
};

const TechnologieCard: React.FC<TechnologieCardProps> = ({ onHover }) => {
    const [hoveredTechnology, setHoveredTechnology] = useState<number | null>(null);

    return (
        <>
            {TECHNOLOGIES_STAGE.map((technology, index) => (
                <div
                    key={index}
                    className={`w-[100px] h-[100px] rounded-lg border-3 flexCenter transition-all delay-100 hover:shadow-lg hover:border-green-100 ${hoveredTechnology === index ? 'hovered' : ''
                        }`}
                    onMouseEnter={() => {
                        setHoveredTechnology(index);
                        onHover(technology.title, technology.description);
                    }}
                    onMouseLeave={() => {
                        setHoveredTechnology(null);
                        onHover(null, null);
                    }}
                >
                    <Image src={technology.image} alt={technology.title} width={80} height={80} />
                </div>
            ))}
        </>
    );
};

export default TechnologieCard;
