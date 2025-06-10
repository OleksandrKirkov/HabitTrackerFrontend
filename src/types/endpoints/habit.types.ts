import { HabitLog } from './habit-log.types'
import { User } from './user.types'

export type Habit = {
    id: string
    userId: string
    user: User
    title: string
    color: string
    icon: string
    frequency: number
    type: string
    reminderTime: string
    reminderMode: string
    isArchived: boolean
    createdAt: string
    updatedAt: string
    habitLogs: HabitLog
}

export const HabitType = {}

export const ReminderMode = {}

export type CreateHabitRequest = {
    userId: string
    title: string
    color: string
    icon: string
    frequency: number
    type: string
    reminderTime: string
    reminderMode: string
}

export type GetHabitsByUser = {
    habits: Habit[]
}
