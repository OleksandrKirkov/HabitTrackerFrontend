import { HabitType } from '@/types/habit.type'
import { getColorMap } from '@/utils/get-color-map'

export function Statisctic({ color }: HabitType) {
    return (
        <div className='bg-secondary rounded-xl overflow-hidden p-4 gap-2 shadow-card'>
            <div className='flex items-center justify-between gap-2'>
                <h2 className='font-bold text-white leading-none'>Statisctic</h2>
                <p className='text-xs leading-none text-text ml-auto'>Times a</p>
                <button className='bg-primary box-item rounded-xl px-3 py-2 text-white font-bold leading-none'>
                    Month
                </button>
                <button
                    className={`bg-yellow box-item rounded-xl px-3 py-2 text-white font-bold leading-none ${getColorMap('bg', color)}`}
                >
                    Year
                </button>
            </div>
        </div>
    )
}
