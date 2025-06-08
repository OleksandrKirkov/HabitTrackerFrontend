import { ReactNode } from 'react'

import { HabitColor } from '@/types/habit.type'

interface ValueProps {
    children: ReactNode
    color: HabitColor
    is_complete: boolean
    is_today: boolean
}

function Value({ children, color, is_complete, is_today }: ValueProps) {
    return is_today ? (
        <div
            className={`flex justify-center items-center w-8 h-8 rounded-full border border-solid border-${is_complete ? 'yellow' : 'primary'}`}
        >
            <p
                className={`text-center text-sm text-${is_complete ? color : 'primary'} leading-none`}
            >
                {children}
            </p>
        </div>
    ) : (
        <div className={`flex justify-center items-center w-8 h-8 rounded-full bg-primary `}>
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
