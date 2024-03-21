import React from 'react';
interface CardProps{
    title: string
    content: string
    img?: string
    className: string
}
export const Card: React.FC<CardProps> = ({title, content, img, className}) => {
    return (
        <div className={`bg-amber-600 text-center absolute ${className}`}
        >
            <h3 className='mt-2 font-bold p-0.5'>{title}</h3>
            <p className='mt-2 p-0.5'>{content}</p>
        </div>
    );
};