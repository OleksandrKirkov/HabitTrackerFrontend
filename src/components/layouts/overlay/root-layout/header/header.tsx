import { BurgerIcon } from '@/components/svg'

export const Header = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-4'>
            <button className=''>
                <BurgerIcon className='w-6 h-6 stroke-title' />
            </button>
            <h1 className='font-bold text-2xl leading-none text-title'>Habits</h1>
            <div className='w-6 h-6'></div>
        </div>
    )
}
