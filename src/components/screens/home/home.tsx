import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

import { AddIcon } from '@/components/svg'

import { HabitCard } from './habit-card/habit-card'
import { useHabit } from './hook/useHabit'

export function Home() {
    const { habits, isLoading, refetch } = useHabit()

    useEffect(() => {
        refetch()
    }, [])

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

                <div className='flex justify-center'>
                    <Link href='/create-habit' className='inline-flex items-center gap-2 mx-auto'>
                        <AddIcon className='w-4 h-4 stroke-text' />
                        <p className='text-sm leading-none text-text'>Add a new habit</p>
                    </Link>
                </div>
            </AnimatePresence>
        </div>
    )
}
