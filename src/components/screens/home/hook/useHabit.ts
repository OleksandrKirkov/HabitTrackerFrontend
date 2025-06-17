import { useGetHabitsQuery } from '@/api/api'

export function useHabit() {
    const { data: habits = [], isLoading } = useGetHabitsQuery()

    return {
        habits: habits,
        isLoading,
    }
}
