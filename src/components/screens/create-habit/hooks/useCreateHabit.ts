import { useCallback, useState } from 'react'

import { HabitColor, HabitReminder, ReminderRepeat } from '@/types/habit.type'

export function useCreateHabit() {
    const [nameState, setNameState] = useState('')
    const [colorState, setColorState] = useState<HabitColor>('yellow')

    const [frequencyTimeState, setFrequencyTimeState] = useState(0)

    const [reminderState, setReminderState] = useState<HabitReminder>({
        enabled: false,
        repeat: 'Once',
        time: '00:00',
    })

    const onChangeName = useCallback((name: string) => {
        setNameState(name)
    }, [])

    const onChangeColor = useCallback((color: HabitColor) => {
        setColorState(color)
    }, [])

    const onChangeFrequencyTime = useCallback((type: 'minus' | 'plus') => {
        switch (type) {
            case 'plus':
                setFrequencyTimeState((prev) => prev + 1)
                break
            case 'minus':
                setFrequencyTimeState((prev) => prev - 1)
                break
        }
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

    return {
        color: colorState,
        frequencyTime: frequencyTimeState,
        name: nameState,
        onChangeColor,

        onChangeFrequencyTime,
        onChangeName,
        onChangeReminderRepeat,
        onChangeReminderTime,
        onToggleReminderState,
        reminder: reminderState,
    }
}
