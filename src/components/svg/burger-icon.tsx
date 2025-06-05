import { SVGProps } from 'react'

export const BurgerIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 12H20M4 18H20M4 6H20'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}
