export type HabitColor = 'blue' | 'green' | 'red' | 'violet' | 'yellow'

export type HabitFrequencyKind = 'Everyday' | 'TimesOfWeek'

export type ReminderRepeat = 'Daily' | 'Once'

export type HabitFrequency = {
    type: HabitFrequencyKind
    times?: number
}

export type HabitReminder = {
    enabled: boolean
    time: string
    repeat: ReminderRepeat
}

export type TrackedDays = Record<string, number | undefined>

export type HabitType = {
    id: number
    title: string
    frequency: HabitFrequency
    reminder: HabitReminder
    trackedDays: TrackedDays
    color: HabitColor
    notificationEnabled: boolean
}
