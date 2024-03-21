export interface CardType {
    title: string
    content: string
    img: string
}
export interface CardActiveType extends CardType{
    left: number
    top: number
    width: number
    height: number
    zIndex: number
}
export type Orientation = 'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'