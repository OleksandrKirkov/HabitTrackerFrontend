import { useCallback, useEffect, useState } from 'react'

import { HabitType } from '@/types/habit.type'

export function useHabit() {
    const [habitsState, setHabitsState] = useState<HabitType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getHabits = useCallback(async () => {
        try {
            setIsLoading(true)

            const response = await import('../../../../../public/data/habits-list.json')

            const habits: HabitType[] = response.default as HabitType[]

            setHabitsState(habits)
        } catch (e: unknown) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        getHabits()
    }, [getHabits])

    return {
        getHabits,
        habits: habitsState,
        isLoading,
    }
}
