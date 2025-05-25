'use client'
import React, {useCallback} from 'react';
import {ActiveCard, useMoving} from "@/features/cardActive";
import {useCards} from "@/entities/Card";

const Field = () => {
    const isMoving = useMoving(state => state.isMoving)
    const setIsMoving = useMoving(state => state.setIsMoving)
    const setXPosition = useMoving(state => state.setXPosition)
    const setYPosition = useMoving(state => state.setYPosition)
    const xPosition = useMoving(state => state.xPosition)
    const yPosition = useMoving(state => state.yPosition)

    const setSelectedCard = useCards(state => state.setSelectedCard)
    const selectedCard = useCards(state => state.selectedCard)
    const setCardLeft = useCards(state => state.setCardLeft)
    const setCardTop = useCards(state => state.setCardTop)
    const cards = useCards(state => state.cards)
    const isSizing = useCards(state => state.isSizing)
    const setIsSizing = useCards(state => state.setIsSizing)
    const sizeOrientation = useCards(state => state.sizeOrientation)
    const setCardWidth = useCards(state => state.setCardWidth)
    const setCardHeight = useCards(state => state.setCardHeight)

    const move = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const index = selectedCard as number
        if (isMoving) {
            setCardLeft(index, cards[index].left + (e.clientX - xPosition))
            setCardTop(index, cards[index].top + (e.clientY - yPosition))
        } else if (isSizing) {
            if (sizeOrientation?.includes('right')){
                setCardWidth(index, cards[index].width + (e.clientX - xPosition)*1.5)
                setCardLeft(index, cards[index].left + (xPosition - e.clientX) / 2)
            }
            if (sizeOrientation?.includes('left')){
                setCardWidth(index, cards[index].width + (xPosition - e.clientX)*2)
                setCardLeft(index, cards[index].left + (e.clientX - xPosition))
            }
            if (sizeOrientation?.includes('top') ){
                setCardHeight(index, cards[index].height + (yPosition - e.clientY)*2)
                setCardTop(index, cards[index].top + (e.clientY - yPosition))
            }
            if (sizeOrientation?.includes('bottom')) {
                setCardHeight(index, cards[index].height + (e.clientY - yPosition)*1.5)
                setCardTop(index, cards[index].top + (yPosition - e.clientY) / 2)
            }
        }
    }, [isMoving, isSizing])
    const finish = useCallback(() => {
        setIsMoving(false)
        setIsSizing(false)
    }, [])
    const resetSelected = useCallback(() => {
        setSelectedCard(null)
    }, [])
    return (
        <div className='w-[4000px] h-[4000px] bg-amber-100 relative'
             onMouseUp={finish}
             onMouseMove={move}
             onClick={resetSelected}
        >
            {cards.map((card, index) =>
                <ActiveCard key={index} title={card.title} content={card.content} index={index}/>
            )}

        </div>
    );
};

export default Field;