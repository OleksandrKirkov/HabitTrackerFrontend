import { ButtonHTMLAttributes, HTMLAttributes, useState } from 'react'

import { MinusIcon, NotificationIcon, PlusIcon } from '@/components/svg'
import { TextField } from '@/components/ui/text-field/text-field'
import { ToggleSwitch } from '@/components/ui/toggle-switch/toggle-switch'
import { ReminderRepeat } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

import { Header } from './header/header'

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

function ColorItem({ color }: { color: string }) {
    return <div className={`w-12 h-12 rounded-full shadow-item ${getColorMap('bg', color)}`}></div>
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
    const [frequencyTimeState] = useState(0)
    const [reminderTimeState] = useState('00:00')
    const [reminderRepeatState] = useState<ReminderRepeat>('Once')

    return (
        <div className='w-screen h-screen py-4 flex flex-col'>
            <Header />

            <div className='w-full p-4 flex flex-col grow'>
                <Field className='mb-4' title='Habit name'>
                    <TextField placeholder='Input habit name' />
                </Field>

                <Field className='mb-4' title='Chose Colors'>
                    <div className='flex items-center px-4 justify-between gap-1'>
                        <ColorItem color='yellow' />
                        <ColorItem color='green' />
                        <ColorItem color='red' />
                        <ColorItem color='violet' />
                        <ColorItem color='blue' />
                    </div>
                </Field>

                <Field className='mb-4' title='Frequency'>
                    <div className='flex items-center gap-4'>
                        <Button className='bg-primary'>
                            <MinusIcon className='w-6 h-6 stroke-white' />
                        </Button>
                        <div className='w-9 h-9 rounded-lg bg-secondary flex items-center justify-center'>
                            <p className='leading-none text-white'>{frequencyTimeState}</p>
                        </div>
                        <Button className='bg-primary'>
                            <PlusIcon className='w-6 h-6 stroke-white' />
                        </Button>

                        <p className='text-text text-sm ml-auto'>Times of week</p>
                    </div>
                </Field>

                <Field title='Reminder'>
                    <div className='flex items-center justify-between gap-2'>
                        <button className='bg-primary rounded-lg px-2 py-1 flex items-center gap-1 shadow-item'>
                            <NotificationIcon className={`w-6 h-6 stroke-white`} />
                            <p className='font-bold leading-none text-white'>{reminderTimeState}</p>
                        </button>
                        <button className='bg-primary rounded-lg px-3 py-2 shadow-item'>
                            <p className='fontbold leading-none text-white'>
                                {reminderRepeatState}
                            </p>
                        </button>
                        <ToggleSwitch />
                    </div>
                </Field>

                <button className='h-12 w-full bg-primary shadow-card rounded-2xl text-white mt-auto block'>
                    Create Habit
                </button>
            </div>
        </div>
    )
}
