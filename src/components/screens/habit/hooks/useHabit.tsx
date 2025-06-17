import { useGetHabitByIdQuery } from '@/api/api'

export function useHabit(id: number) {
    const { data: habit, isLoading } = useGetHabitByIdQuery(id)

    return {
        habit,
        isLoading,
    }
}
