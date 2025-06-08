import { AnimatePresence } from 'framer-motion'

import { AddIcon } from '@/components/svg'

import { HabitCard } from './habit-card/habit-card'
import { useHabit } from './hook/useHabit'

export function Home() {
    const { habits, isLoading } = useHabit()

    return (
        <div className='h-full'>
            <AnimatePresence>
                {!isLoading ? (
                    <div key='habits-list' className='flex flex-col gap-4 mb-4'>
                        {habits.map((habit, index) => (
                            <HabitCard key={`${habit.id}_${index}`} {...habit} />
                        ))}
                    </div>
                ) : (
                    <p key='habits-loading'>Loading</p>
                )}

                <div>
                    <button className='flex items-center gap-2 mx-auto'>
                        <AddIcon className='w-4 h-4 stroke-text' />
                        <p className='text-sm leading-none text-text'>Add a new habit</p>
                    </button>
                </div>
            </AnimatePresence>
        </div>
    )
}
