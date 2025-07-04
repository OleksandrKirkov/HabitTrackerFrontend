import { ReactNode } from 'react'

import { HabitColor } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

interface ValueProps {
    children: ReactNode
    color: HabitColor
    is_complete: boolean
    is_today: boolean
}

function Value({ children, color, is_complete, is_today }: ValueProps) {
    return is_today ? (
        <div
            className={`flex justify-center items-center w-8 h-8 rounded-full shadow-item border border-solid ${is_complete ? 'border-transparent' : getColorMap('border', color)} ${is_complete ? getColorMap('bg', color) : 'bg-transparent'}`}
        >
            <p
                className={`text-center text-sm ${is_complete ? 'text-white' : getColorMap('text', color)} leading-none`}
            >
                {children}
            </p>
        </div>
    ) : (
        <div
            className={`flex justify-center items-center w-8 h-8 rounded-full ${is_complete ? getColorMap('bg', color) : 'bg-primary'} shadow-item`}
        >
            <p className={`text-center text-sm text-white leading-loose`}>{children}</p>
        </div>
    )
}

interface DayItemProps {
    color: HabitColor
    is_complete: boolean
    is_today: boolean
    title: string
    value: number | string
}

export function DayItem({ color, is_complete, is_today, title, value }: DayItemProps) {
    return (
        <div className='flex flex-col items-center gap-1.5'>
            <p className='text-xs leading-none text-center text-text'>{title}</p>
            <Value is_complete={is_complete} is_today={is_today} color={color}>
                {value}
            </Value>
        </div>
    )
}
