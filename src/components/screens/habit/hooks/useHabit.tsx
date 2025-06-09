import { useCallback, useEffect, useState } from 'react'

import { HabitType } from '@/types/habit.type'

export function useHabit(id: number) {
    const [habitState, setHabitState] = useState<HabitType | undefined>()
    const [isLoading, setIsLoading] = useState(true)

    const getHabit = useCallback(async () => {
        try {
            setIsLoading(true)

            const response = await import('../../../../../public/data/habits-list.json')

            const habits: HabitType[] = response.default as HabitType[]

            setHabitState(habits.find((habit) => habit.id === id))
        } catch (e: unknown) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }, [id])

    useEffect(() => {
        getHabit()
    }, [getHabit])

    return {
        getHabit,
        habit: habitState,
        isLoading,
    }
}
