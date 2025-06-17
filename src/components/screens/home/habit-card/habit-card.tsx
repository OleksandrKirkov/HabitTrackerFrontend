import Link from 'next/link'

import { NotificationIcon } from '@/components/svg'
import { Habit } from '@/types/endpoints/habit.types'
import { HabitColor } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

import { DayItem } from './card-value'

export function HabitCard(props: Habit) {
    const fullDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date()
    const todayIndex = today.getDay()

    const orderedDays = [...fullDays.slice(todayIndex), ...fullDays.slice(0, todayIndex)]

    return (
        <Link
            href={`/habit/?id=${props.id}`}
            className='block p-4 bg-secondary rounded-2xl w-full shadow-card'
        >
            <div className='flex items-center gap-4 justify-between mb-4'>
                <p className='font-bold leading-none text-text'>{props.title}</p>
                <div className='flex items-center gap-2'>
                    <p className='text-xs text-text'>
                        {props.frequency === 7 ? 'Everyday' : props.frequency + ' times of week'}
                    </p>
                    <NotificationIcon className={`w-4 h-4 ${getColorMap('stroke', props.color)}`} />
                </div>
            </div>
            <div className='flex items-center gap-1 justify-between w-full'>
                {orderedDays.map((day, index) => {
                    const date = new Date()
                    date.setDate(today.getDate() + index)

                    return (
                        <DayItem
                            key={day + index}
                            title={day}
                            value={date.getDate()}
                            is_complete={false}
                            is_today={index === 0}
                            color={props.color as HabitColor}
                        />
                    )
                })}
            </div>
        </Link>
    )
}
