export type HabitLog = {
    id: string
    habitId: string
    habit: string
    logDate: string
    value: number
    createAt: string
}

export type CompleteHabitLogResponse = {
    date: string
    value: number
}

export type CompleteHabitLogRequest = {
    id: number
    date: string
    value: number
}
