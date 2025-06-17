import { HabitLog } from '@/types/endpoints/habit-log.types'

import { generateCalendar } from './generate-calendar'

function getColor(value: number, min: number): string {
    if (value === 0) return '#393c56'
    if (value <= min) return '#e0b36f'
    return '#ffc857'
}

export default function ContributionGraph({ habitLogs }: { habitLogs: HabitLog[] }) {
    const { monthLabels, weeks } = generateCalendar()

    const values = Object.values(habitLogs.map((item) => item.value))
    const min = Math.min(...values)

    return (
        <div className='flex flex-col overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
            <div className='flex ml-10 mb-1'>
                {monthLabels.map((label, i) => (
                    <div key={label + i} className='w-5 text-center text-xs text-text'>
                        {label}
                    </div>
                ))}
            </div>

            <div className='flex'>
                {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className='flex flex-col mr-0.5'>
                        {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const day = week.find((d) => d.dayOfWeek === dayIndex)
                            const dateKey = day?.iso || ''
                            const value =
                                habitLogs.find((item) => item.logDate === dateKey)?.value || 0

                            return (
                                <div
                                    key={dayIndex}
                                    className={`flex items-center justify-center w-6 h-6 rounded-xs mb-0.5`}
                                    style={{ backgroundColor: getColor(value, min) }}
                                >
                                    <p
                                        className={`text-sm text-center leading-none ${habitLogs.find((item) => item.logDate === dateKey)?.value ? 'text-secondary' : 'text-text'}`}
                                    >
                                        {dateKey.split('-')[2]}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
