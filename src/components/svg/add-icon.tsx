import { SVGProps } from 'react'

export const AddIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.33333 8H10.6667M8 5.33333V10.6667M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}
