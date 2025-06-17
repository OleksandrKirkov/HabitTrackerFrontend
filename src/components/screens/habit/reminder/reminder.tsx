import { useCallback, useEffect, useRef, useState } from 'react'

import { useUpdateHabitReminderModeMutation } from '@/api/api'
import { NotificationIcon } from '@/components/svg'
import { Habit } from '@/types/endpoints/habit.types'
import { ReminderRepeat } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

export function Reminder({ color, id, reminderMode, reminderTime }: Habit) {
    const [reminderModeState, setReminderModeState] = useState<ReminderRepeat>(
        reminderMode as ReminderRepeat,
    )
    const [updateReminderMode] = useUpdateHabitReminderModeMutation()

    const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    useEffect(() => {
        if (reminderModeState === reminderMode) return

        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            try {
                updateReminderMode({ id, mode: reminderModeState })
            } catch (e: unknown) {
                console.error(e)
                setReminderModeState(reminderMode as ReminderRepeat)
            }
        }, 2000)
    }, [reminderModeState, id, updateReminderMode, reminderMode])

    const handleUpdateReminderMode = useCallback(() => {
        setReminderModeState((prev) => (prev === 'once' ? 'daily' : 'once'))
    }, [])

    return (
        <div className='flex items-center justify-between bg-secondary rounded-xl overflow-hidden p-4 gap-2 mb-4 shadow-card'>
            <h2 className='font-bold text-white leading-none'>Reminder</h2>
            <button className='bg-primary rounded-lg px-2 py-1 flex items-center gap-1 shadow-item'>
                <NotificationIcon className={`w-6 h-6 ${getColorMap('stroke', color)}`} />
                <p className='font-bold leading-none text-white'>{reminderTime}</p>
            </button>
            <button
                className='bg-primary rounded-lg px-3 py-2 shadow-item'
                onClick={handleUpdateReminderMode}
            >
                <p className='fontbold leading-none text-white'>{reminderModeState}</p>
            </button>
        </div>
    )
}
