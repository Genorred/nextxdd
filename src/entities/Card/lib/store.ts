import {create} from "zustand";
import {CardActiveType, Orientation} from "@/entities/Card";
import {immer} from "zustand/middleware/immer";

interface UseCards {
    cards: CardActiveType[]

    setCards(cards: CardActiveType[]): void

    selectedCard: number | null

    setSelectedCard(index: number | null): void

    setCardLeft(index: number, left: number): void

    setCardTop(index: number, top: number): void

    setCardWidth(index: number, width: number): void

    setCardHeight(index: number, height: number): void

    increaseCardZIndex(index: number, zIndex: number): void

    isSizing: boolean
    sizeOrientation: Orientation | null

    setIsSizing(boolean: boolean, orientation?: Orientation): void
}

export const useCards = create<UseCards>()(immer((set) => ({
    cards: [{
        title: 'Sport',
        content: 'trahat',
        left: 10,
        top: 40,
        width: 150,
        height: 200,
        img: 'qwerty',
        zIndex: 1
    },
        {
            title: 'Cocking',
            content: 'a',
            left: 0,
            top: 0,
            width: 150,
            height: 200,
            img: 'qwerty',
            zIndex: 1
        },
        {
            title: 'Cocking',
            content: 'a',
            left: 0,
            top: 0,
            width: 150,
            height: 200,
            img: 'qwerty',
            zIndex: 1
        }],
    setCards: (cards) => set(() => {
        return {cards}
    }),
    selectedCard: null,
    setSelectedCard: (index) => set(() => {
        return {selectedCard: index}
    }),

    setCardLeft: (index, left) => set((state) => {
        state.cards[index].left = left
    }),
    setCardTop: (index, top) => set((state) => {
        state.cards[index].top = top
    }),
    setCardWidth: (index, width) => set((state) => {
        state.cards[index].width = width
    }),
    setCardHeight: (index, height) => set((state) => {
        state.cards[index].height = height
    }),
    increaseCardZIndex: (index, zIndex) => set((state) => {
        state.cards[index].zIndex +=zIndex
    }),

    isSizing: false,
    sizeOrientation: null,
    setIsSizing: (boolean: boolean, orientation) => set(state => {
        state.isSizing = boolean
        if (orientation)
            state.sizeOrientation = orientation
    })
})))