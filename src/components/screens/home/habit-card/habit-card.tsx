import Link from 'next/link'

import { NotificationIcon } from '@/components/svg'
import { HabitType } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

import { DayItem } from './card-value'

const days: string[] = ['Tue', 'Mon', 'Sun', 'Sat', 'Fri', 'Thu', 'Wed']

export function HabitCard(props: HabitType) {
    return (
        <Link href={`/habit/?id=${props.id}`} className='block p-4 bg-secondary rounded-2xl w-full'>
            <div className='flex items-center gap-4 justify-between mb-4'>
                <p className='font-bold leading-none text-text'>{props.title}</p>
                <div className='flex items-center gap-2'>
                    <p className='text-xs text-text'>{props.frequency.type}</p>
                    <NotificationIcon className={`w-4 h-4 ${getColorMap('stroke', props.color)}`} />
                </div>
            </div>
            <div className='flex items-center gap-1 justify-between w-full'>
                {days.map((day, index) => (
                    <DayItem
                        key={day + index}
                        title={day}
                        value={index}
                        is_complete={false}
                        is_today={false}
                        color={props.color}
                    />
                ))}
            </div>
        </Link>
    )
}
