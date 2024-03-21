import {create} from "zustand";

interface UseMoving {
    isMoving: boolean
    setIsMoving(boolean: boolean): void
    xPosition: number
    yPosition: number
    setXPosition(position: number): void
    setYPosition(position: number): void
}

export const useMoving = create<UseMoving>()((set, get) => ({
    isMoving: false,
    setIsMoving: (boolean) => set((state) => {
        return {isMoving: boolean}
    }),
    xPosition: 0,
    yPosition: 0,
    setXPosition: (position) => set(() => {
        return {xPosition: position}
    }),
    setYPosition: (position) => set(() => {
        return {yPosition: position}
    })
}))