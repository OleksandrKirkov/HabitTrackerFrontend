import { SVGProps } from 'react'

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M15 18L9 12L15 6'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}
