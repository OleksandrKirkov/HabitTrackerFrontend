import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import { Frequency } from './frequency/frequency'
import { Header } from './header/header'
import { History } from './history/history'
import { useHabit } from './hooks/useHabit'
import { Reminder } from './reminder/reminder'

export function Habit() {
    const router = useRouter()

    const { habit, isLoading } = useHabit(Number(router.query.id))

    return (
        <div className='w-screen py-4'>
            <AnimatePresence>
                {!isLoading ? (
                    habit ? (
                        <div key='habit-content'>
                            <Header title={habit.title} id={Number(habit.id)} />

                            <div className='w-full h-full p-4'>
                                <Frequency {...habit} />

                                <Reminder {...habit} />

                                <History {...habit} />
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
