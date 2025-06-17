import { useGetHabitsQuery } from '@/api/api'

export function useHabit() {
    const { data: habits = [], isLoading, refetch } = useGetHabitsQuery()

    return {
        habits: habits,
        isLoading,
        refetch,
    }
}
