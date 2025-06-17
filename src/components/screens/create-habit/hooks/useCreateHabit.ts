import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { useCreateHabitMutation } from '@/api/api'
import { HabitColor, HabitReminder, ReminderRepeat } from '@/types/habit.type'

export function useCreateHabit() {
    const router = useRouter()

    const [nameState, setNameState] = useState('')
    const [colorState, setColorState] = useState<HabitColor>('yellow')

    const [frequencyTimeState, setFrequencyTimeState] = useState(0)

    const [reminderState, setReminderState] = useState<HabitReminder>({
        enabled: false,
        repeat: 'once',
        time: '00:00',
    })

    const [createHabit] = useCreateHabitMutation()

    const onChangeName = useCallback((name: string) => {
        setNameState((prev) => (prev.split('').length < 48 ? name : prev))
    }, [])

    const onChangeColor = useCallback((color: HabitColor) => {
        setColorState(color)
    }, [])

    const onChangeFrequencyTime = useCallback((type: 'minus' | 'plus') => {
        setFrequencyTimeState((prev) => {
            switch (type) {
                case 'plus':
                    return prev < 7 ? prev + 1 : prev
                case 'minus':
                    return prev > 1 ? prev - 1 : prev
            }
        })
    }, [])

    const onToggleReminderState = useCallback((checked: boolean) => {
        setReminderState((prev) => ({ ...prev, enabled: checked }))
    }, [])

    const onChangeReminderRepeat = useCallback((type: ReminderRepeat) => {
        setReminderState((prev) => ({ ...prev, repeat: type }))
    }, [])

    const onChangeReminderTime = useCallback((time: string) => {
        setReminderState((prev) => ({ ...prev, time }))
    }, [])

    const onCreateHabit = useCallback(async () => {
        try {
            await createHabit({
                color: colorState,
                frequency: frequencyTimeState,
                icon: '1',
                reminderMode: reminderState.repeat,
                reminderTime: reminderState.time,
                title: nameState,
                type: 'counter',
            }).unwrap()

            router.push('/')
        } catch (e: unknown) {
            console.error(e)
        }
    }, [createHabit, colorState, frequencyTimeState, reminderState, nameState, router])

    return {
        color: colorState,
        frequencyTime: frequencyTimeState,
        name: nameState,
        onChangeColor,

        onChangeFrequencyTime,
        onChangeName,
        onChangeReminderRepeat,
        onChangeReminderTime,
        onCreateHabit,
        onToggleReminderState,
        reminder: reminderState,
    }
}
