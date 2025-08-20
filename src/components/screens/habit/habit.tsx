import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { useCompleteHabitLogMutation } from '@/api/api'
import { getColorMap } from '@/utils/get-color-map'

import { Frequency } from './frequency/frequency'
import { Header } from './header/header'
import { History } from './history/history'
import { useHabit } from './hooks/useHabit'
import { Reminder } from './reminder/reminder'

export function Habit() {
    const router = useRouter()

    const { habit, isLoading, refetch } = useHabit(Number(router.query.id))
    const [completeHabitLog] = useCompleteHabitLogMutation()

    const handleCompleteLog = useCallback(async () => {
        if (!habit) return

        try {
            await completeHabitLog({
                date: new Date().toISOString(),
                id: Number(habit.id),
                value: 1,
            }).unwrap()
            await refetch()
        } catch (e: unknown) {
            console.error(e)
        }
    }, [completeHabitLog, habit, refetch])

    return (
        <div className='w-screen h-screen py-4'>
            <AnimatePresence>
                {!isLoading ? (
                    habit ? (
                        <div key='habit-content' className='flex flex-col h-full'>
                            <Header title={habit.title} id={Number(habit.id)} />

                            <div className='w-full h-full p-4 flex-1 flex flex-col'>
                                <Frequency {...habit} />

                                <Reminder {...habit} />

                                <History {...habit} />

                                <div className='w-full mt-auto'>
                                    <button
                                        className={`${getColorMap('bg', habit.color)} text-white w-full py-2 rounded-xl shadow-card font-bold`}
                                        onClick={handleCompleteLog}
                                    >
                                        Виконано
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p key='habit-error'>Error</p>
                    )
                ) : (
                    <p key='habit-loading'>loading</p>
                )}
            </AnimatePresence>
        </div>
    )
}
