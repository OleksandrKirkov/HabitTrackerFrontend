import { ButtonHTMLAttributes } from 'react'

import { MinusIcon, PlusIcon } from '@/components/svg'
import { HabitType } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export function Frequency({ color, frequency }: HabitType) {
    return (
        <div className='flex items-center bg-secondary rounded-xl overflow-hidden p-4 gap-2 mb-4'>
            <h2 className='font-bold text-white leading-none'>Frequency</h2>

            <p className='text-text text-sm ml-auto'>{frequency.type}</p>
            <Button className={getColorMap('bg', color)}>
                <MinusIcon className='w-6 h-6 stroke-white' />
            </Button>
            <div className='w-9 h-9 rounded-lg bg-primary flex items-center justify-center'>
                <p className='leading-none text-white'>{frequency.times || 0}</p>
            </div>
            <Button className={getColorMap('bg', color)}>
                <PlusIcon className='w-6 h-6 stroke-white' />
            </Button>
        </div>
    )
}
