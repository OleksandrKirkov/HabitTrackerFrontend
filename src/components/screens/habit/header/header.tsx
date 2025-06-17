import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { useDeleteHabitMutation } from '@/api/api'
import { ArrowIcon, SettingsIcon } from '@/components/svg'

export function Header({ id, title }: { title: string; id: number }) {
    const router = useRouter()

    const [showSettings, setShowSettings] = useState(false)
    const [deleteHabit] = useDeleteHabitMutation()

    const handleDeleteHabit = useCallback(async () => {
        try {
            await deleteHabit(id).unwrap()
            router.push('/')
        } catch (e) {
            console.error(e)
        }
    }, [deleteHabit, id, router])

    return (
        <div className='flex items-center gap-2 p-4 w-full mb-4'>
            <button onClick={() => router.back()}>
                <ArrowIcon className='w-6 h-6 stroke-text' />
            </button>

            <h1 className='font-bold text-2xl leading-none text-title grow'>{title}</h1>

            <div className='relative'>
                <button className='' onClick={() => setShowSettings((prev) => !prev)}>
                    <SettingsIcon className='w-6 h-6 stroke-text' />
                </button>

                <div
                    className={`absolute top-full right-0 px-4 py-2 bg-secondary shadow-item rounded-xl ${showSettings ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity`}
                >
                    <button className='text-red' onClick={handleDeleteHabit}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
