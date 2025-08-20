import { useGetHabitByIdQuery } from '@/api/api'

export function useHabit(id: number) {
    const { data: habit, isLoading, refetch } = useGetHabitByIdQuery(id)

    return {
        habit,
        isLoading,
        refetch,
    }
}
