import { SVGProps } from 'react'

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 12H19M12 5V19'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}
