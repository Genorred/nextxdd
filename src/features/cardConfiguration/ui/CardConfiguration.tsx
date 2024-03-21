'use client'
import React, {useCallback, useEffect, useState} from 'react';
import {LuArrowDownSquare} from "react-icons/lu";
import {LuArrowUpSquare} from "react-icons/lu";
import {useCards} from "@/entities/Card";

export const CardConfiguration = ({index}: { index: number }) => {
    const [max, setMax] = useState<boolean>(false)
    const [min, setMin] = useState<boolean>(false)
    const cards = useCards(state => state.cards)
    const increaseCardZIndex = useCards(state => state.increaseCardZIndex)
    const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }, [])
    const increase = useCallback(() => {
        if (!max)
            increaseCardZIndex(index, 1)
    }, [max])
    const decrease = useCallback(() => {
        if (!min)
            increaseCardZIndex(index, -1)
    }, [min])
    const checkMax = useCallback(() => {
        setMax(true)
        for (let i = 0; i<cards.length; i++) {
            if (i!==index && cards[i].zIndex > cards[index].zIndex-1) {
                setMax(false)
                break
            }
        }
    }, [cards[index].zIndex])
    const checkMin = useCallback(() => {
        setMin(true)
        for (let i = 0; i<cards.length; i++) {
            if (i!==index && cards[i].zIndex < cards[index].zIndex+1) {
                setMin(false)
                break
            }
        }
    }, [cards[index].zIndex])
    useEffect(() => {
            checkMax()
            checkMin()
    }, [cards[index].zIndex]);
    return (
        <div className='absolute -right-28 -top-6 flex flex-col gap-2 bg-amber-300 p-4 rounded-xl'
             onClick={stopPropagation}>
            <LuArrowUpSquare className={`w-8 h-8  ${max ? 'stroke-neutral-600' : ''}`} onClick={increase}/>
            <LuArrowDownSquare className={`w-8 h-8  ${min ? 'stroke-neutral-600' : ''}`} onClick={decrease}/>
        </div>
    );
};