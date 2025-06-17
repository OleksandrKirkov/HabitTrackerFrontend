import { ButtonHTMLAttributes } from 'react'

import { MinusIcon, PlusIcon } from '@/components/svg'
import { Habit } from '@/types/endpoints/habit.types'
import { getColorMap } from '@/utils/get-color-map'

function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-item ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export function Frequency({ color, frequency }: Habit) {
    return (
        <div className='flex items-center bg-secondary rounded-xl overflow-hidden p-4 gap-2 mb-4 shadow-card'>
            <h2 className='font-bold text-white leading-none'>Frequency</h2>

            <p className='text-text text-sm ml-auto'>
                {frequency >= 7 ? 'Everyday' : 'Times of week'}
            </p>
            <Button className={getColorMap('bg', color)}>
                <MinusIcon className='w-6 h-6 stroke-white' />
            </Button>
            <div className='w-9 h-9 rounded-lg bg-primary flex items-center justify-center'>
                <p className='leading-none text-white'>{frequency || 0}</p>
            </div>
            <Button className={getColorMap('bg', color)}>
                <PlusIcon className='w-6 h-6 stroke-white' />
            </Button>
        </div>
    )
}
