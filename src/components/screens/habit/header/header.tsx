import { useRouter } from 'next/router'

import { ArrowIcon, SettingsIcon } from '@/components/svg'

export function Header({ title }: { title: string }) {
    const router = useRouter()

    return (
        <div className='flex items-center gap-2 p-4 w-full mb-4'>
            <button onClick={() => router.back()}>
                <ArrowIcon className='w-6 h-6 stroke-text' />
            </button>

            <h1 className='font-bold text-2xl leading-none text-title grow'>{title}</h1>

            <button className=''>
                <SettingsIcon className='w-6 h-6 stroke-text' />
            </button>
        </div>
    )
}
