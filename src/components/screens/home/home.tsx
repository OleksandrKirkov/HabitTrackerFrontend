import { AddIcon } from '@/components/svg'
import { HabitType } from '@/types/habit.type'

import { HabitCard } from './habit-card/habit-card'

const habits: HabitType[] = [
    {
        color: 'yellow',
        id: 1,
        name: 'Meditation',
        timesPerDay: 0,
    },
    {
        color: 'green',
        id: 1,
        name: 'Meditation',
        timesPerDay: 0,
    },
    {
        color: 'red',
        id: 1,
        name: 'Meditation',
        timesPerDay: 0,
    },
    {
        color: 'blue',
        id: 1,
        name: 'Meditation',
        timesPerDay: 0,
    },
    {
        color: 'violet',
        id: 1,
        name: 'Meditation',
        timesPerDay: 0,
    },
]

export function Home() {
    return (
        <div className='flex flex-col gap-4 items-center'>
            {habits.map((habit, index) => (
                <HabitCard key={`${habit.id}_${index}`} {...habit} />
            ))}

            <button className='flex items-center gap-2'>
                <AddIcon className='w-4 h-4 stroke-text' />
                <p className='text-sm leading-none text-text'>Add a new habit</p>
            </button>
        </div>
    )
}
