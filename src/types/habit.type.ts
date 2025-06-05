export type HabitColors = 'blue' | 'green' | 'red' | 'violet' | 'yellow'

export type HabitType = {
    id: number
    name: string
    color: HabitColors
    timesPerDay: number
}
