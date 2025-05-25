'use client'
import React, {useCallback, useState} from 'react';
import {useMoving} from "@/features/cardActive";
import {Card} from "@/entities/Card/ui/Card";
import {Orientation, useCards} from "@/entities/Card";
import {CardConfiguration} from "@/features/cardConfiguration";

interface CardProps {
    title: string,
    content: string,
    index: number
    img?: string
}

export const ActiveCard: React.FC<CardProps> = ({title, content, img, index}) => {
    const setIsMoving = useMoving(state=>state.setIsMoving)
    const isMoving = useMoving(state=>state.isMoving)
    const setXPosition = useMoving(state => state.setXPosition)
    const setYPosition = useMoving(state => state.setYPosition)

    const cards = useCards(state => state.cards)
    const setSelectedCard = useCards(state => state.setSelectedCard)
    const selectedCard = useCards(state => state.selectedCard)
    const setIsSizing = useCards(state => state.setIsSizing)

    const startMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setSelectedCard(index)
        setIsMoving(true)
        setXPosition(e.clientX)
        setYPosition(e.clientY)
    }, [])

    const startSizing = useCallback((orientation: Orientation) => (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsSizing(true, orientation)
        setXPosition(e.clientX)
        setYPosition(e.clientY)
    }, [])
    return (
        <div style={{
            left: `${cards[index].left}px`, top: `${cards[index].top}px`,
            width: `${cards[index].width}px`, height: `${cards[index].height}px`,
            zIndex: cards[index].zIndex+1000
        }}
             onClick={e => e.stopPropagation()}>
             className={`absolute ${selectedCard === index ? 'border-amber-950 border-2' : 'border-2'}`}

        >
            {selectedCard === index && !isMoving
                ?<>
                    <div className='absolute left-[-0.25rem] w-2 h-full cursor-e-resize z-20'
                         onMouseDown={startSizing('left')}></div>
                    <div className='absolute right-[-0.25rem] w-2 h-full cursor-e-resize z-20'
                         onMouseDown={startSizing('right')}></div>
                    <div className='absolute top-[-0.25rem] h-2 w-full cursor-n-resize z-20'
                         onMouseDown={startSizing('top')}></div>
                    <div className='absolute bottom-[-0.25rem] h-2 w-full cursor-n-resize z-20'
                         onMouseDown={startSizing('bottom')}></div>

                    <div className='absolute left-[-0.5rem] top-[-0.5rem] w-4 h-4 cursor-nwse-resize z-30'
                         onMouseDown={startSizing('left-top')}></div>
                    <div className='absolute right-[-0.5rem] top-[-0.5rem] w-4 h-4 cursor-nesw-resize z-30'
                         onMouseDown={startSizing('right-top')}></div>
                    <div className='absolute left-[-0.5rem] bottom-[-0.5rem] w-4 h-4 cursor-nesw-resize z-30'
                         onMouseDown={startSizing('left-bottom')}></div>
                    <div className='absolute right-[-0.5rem] bottom-[-0.5rem] w-4 h-4 cursor-nwse-resize z-30'
                         onMouseDown={startSizing('right-bottom')}></div>

                    <CardConfiguration index={index}/>
                </>: ''
            }
<div onMouseDown={startMove} className='w-full h-full'>
    <Card title={title} content={content} className='w-full h-full'/>
</div>

        </div>
    );
};