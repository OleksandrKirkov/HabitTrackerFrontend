import { ButtonHTMLAttributes, HTMLAttributes, useCallback } from 'react'

import { MinusIcon, NotificationIcon, PlusIcon } from '@/components/svg'
import { TextField } from '@/components/ui/text-field/text-field'
import { ToggleSwitch } from '@/components/ui/toggle-switch/toggle-switch'
import { HabitColor } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

import { Header } from './header/header'
import { useCreateHabit } from './hooks/useCreateHabit'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
    title: string
}

function Field({ children, title, ...props }: FieldProps) {
    return (
        <div {...props}>
            <h3 className='text-text mb-2'>{title}</h3>
            {children}
        </div>
    )
}

interface ColorItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    activeColor: HabitColor
    color: HabitColor
}

function ColorItem({ activeColor, children, color, ...props }: ColorItemProps) {
    return (
        <button
            className={`w-12 h-12 rounded-full shadow-item transition-opacity ${activeColor === color ? 'opacity-100' : 'opacity-25'} ${getColorMap('bg', color)}`}
            {...props}
        >
            {children}
        </button>
    )
}

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

export function CreateHabit() {
    const {
        color,
        frequencyTime,
        name,
        onChangeColor,
        onChangeFrequencyTime,
        onChangeName,
        onChangeReminderRepeat,
        onChangeReminderTime,
        onCreateHabit,
        onToggleReminderState,
        reminder,
    } = useCreateHabit()

    const onChangeReminderRepeatHandler = useCallback(() => {
        switch (reminder.repeat) {
            case 'daily':
                onChangeReminderRepeat('once')
                break
            case 'once':
                onChangeReminderRepeat('daily')
                break
        }
    }, [reminder.repeat, onChangeReminderRepeat])

    return (
        <div className='w-screen h-screen py-4 flex flex-col'>
            <Header />

            <div className='w-full p-4 flex flex-col grow'>
                <Field className='mb-4' title='Habit name'>
                    <TextField
                        placeholder='Input habit name'
                        value={name}
                        onChange={(e) => onChangeName(e.target.value)}
                    />
                </Field>

                <Field className='mb-4' title='Chose Colors'>
                    <div className='flex items-center px-4 justify-between gap-1'>
                        <ColorItem
                            color='yellow'
                            activeColor={color}
                            onClick={() => onChangeColor('yellow')}
                        />
                        <ColorItem
                            color='green'
                            activeColor={color}
                            onClick={() => onChangeColor('green')}
                        />
                        <ColorItem
                            color='red'
                            activeColor={color}
                            onClick={() => onChangeColor('red')}
                        />
                        <ColorItem
                            color='violet'
                            activeColor={color}
                            onClick={() => onChangeColor('violet')}
                        />
                        <ColorItem
                            color='blue'
                            activeColor={color}
                            onClick={() => onChangeColor('blue')}
                        />
                    </div>
                </Field>

                <Field className='mb-4' title='Frequency'>
                    <div className='flex items-center gap-4'>
                        <Button
                            className='bg-primary'
                            onClick={() => onChangeFrequencyTime('minus')}
                        >
                            <MinusIcon className='w-6 h-6 stroke-white' />
                        </Button>
                        <div className='w-9 h-9 rounded-lg bg-secondary flex items-center justify-center'>
                            <p className='leading-none text-white'>{frequencyTime}</p>
                        </div>
                        <Button
                            className='bg-primary'
                            onClick={() => onChangeFrequencyTime('plus')}
                        >
                            <PlusIcon className='w-6 h-6 stroke-white' />
                        </Button>

                        <p className='text-text text-sm ml-auto'>
                            {frequencyTime === 7 ? 'Everyday' : 'Times of week'}
                        </p>
                    </div>
                </Field>

                <Field title='Reminder'>
                    <div className='flex items-center justify-between gap-2'>
                        <button className='bg-primary rounded-lg px-2 py-1 flex items-center gap-1 shadow-item'>
                            <NotificationIcon className={`w-6 h-6 stroke-white`} />
                            <p className='font-bold leading-none text-white'>{reminder.time}</p>
                        </button>
                        <button
                            className='bg-primary rounded-lg px-3 py-2 shadow-item'
                            onClick={onChangeReminderRepeatHandler}
                        >
                            <p className='fontbold leading-none text-white'>{reminder.repeat}</p>
                        </button>
                        <ToggleSwitch checked={reminder.enabled} onChange={onToggleReminderState} />
                    </div>
                </Field>

                <button
                    className='h-12 w-full bg-primary shadow-card rounded-2xl text-white mt-auto block'
                    onClick={onCreateHabit}
                >
                    Create Habit
                </button>
            </div>
        </div>
    )
}
