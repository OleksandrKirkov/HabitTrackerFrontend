import { ButtonHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'

import { useUpdateHabitFrequencyMutation } from '@/api/api'
import { MinusIcon, PlusIcon } from '@/components/svg'
import { Habit } from '@/types/endpoints/habit.types'
import { getColorMap } from '@/utils/get-color-map'

function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-item ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export function Frequency({ color, frequency, id }: Habit) {
    const [frequencyState, setFrequencyState] = useState(frequency)
    const [updateFrequency] = useUpdateHabitFrequencyMutation()

    const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    useEffect(() => {
        if (frequencyState === frequency) return

        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            try {
                updateFrequency({ frequency: frequencyState, id }).unwrap()
            } catch (e: unknown) {
                console.error('Failed to update frequency:', e)
                setFrequencyState(frequency)
            }
        }, 2000)
    }, [frequencyState, id, updateFrequency, frequency])

    const handleIncrease = useCallback(() => {
        setFrequencyState((prev) => (prev < 7 ? prev + 1 : prev))
    }, [])
    const handleDecrease = useCallback(() => {
        setFrequencyState((prev) => (prev > 1 ? prev - 1 : prev))
    }, [])

    return (
        <div className='flex items-center bg-secondary rounded-xl overflow-hidden p-4 gap-2 mb-4 shadow-card'>
            <h2 className='font-bold text-white leading-none'>Frequency</h2>

            <p className='text-text text-sm ml-auto'>
                {frequencyState >= 7 ? 'Everyday' : 'Times of week'}
            </p>
            <Button className={getColorMap('bg', color)} onClick={handleDecrease}>
                <MinusIcon className='w-6 h-6 stroke-white' />
            </Button>
            <div className='w-9 h-9 rounded-lg bg-primary flex items-center justify-center'>
                <p className='leading-none text-white select-none'>{frequencyState}</p>
            </div>
            <Button className={getColorMap('bg', color)} onClick={handleIncrease}>
                <PlusIcon className='w-6 h-6 stroke-white' />
            </Button>
        </div>
    )
}
