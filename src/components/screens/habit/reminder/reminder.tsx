import { NotificationIcon } from '@/components/svg'
import { Habit } from '@/types/endpoints/habit.types'
import { getColorMap } from '@/utils/get-color-map'

export function Reminder({ color, reminderMode, reminderTime }: Habit) {
    return (
        <div className='flex items-center justify-between bg-secondary rounded-xl overflow-hidden p-4 gap-2 mb-4 shadow-card'>
            <h2 className='font-bold text-white leading-none'>Reminder</h2>
            <button className='bg-primary rounded-lg px-2 py-1 flex items-center gap-1 shadow-item'>
                <NotificationIcon className={`w-6 h-6 ${getColorMap('stroke', color)}`} />
                <p className='font-bold leading-none text-white'>{reminderTime}</p>
            </button>
            <button className='bg-primary rounded-lg px-3 py-2 shadow-item'>
                <p className='fontbold leading-none text-white'>{reminderMode}</p>
            </button>
        </div>
    )
}
