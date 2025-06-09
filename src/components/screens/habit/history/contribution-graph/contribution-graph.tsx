import { generateCalendar } from './generate-calendar'

function getColor(value: number, min: number, max: number): string {
    if (value === 0) return '#393c56'
    if (value <= min) return '#e0b36f'
    return '#ffc857'
}

export default function ContributionGraph({
    trackerDays,
}: {
    trackerDays: Record<string, number>
}) {
    const { monthLabels, weeks } = generateCalendar()

    const values = Object.values(trackerDays)
    const min = Math.min(...values)
    const max = Math.max(...values)

    return (
        <div className='flex flex-col overflow-x-auto'>
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
                            const value = trackerDays[dateKey] || 0

                            return (
                                <div
                                    key={dayIndex}
                                    className={`w-5 h-5 rounded-xs mb-0.5`}
                                    style={{ backgroundColor: getColor(value, min, max) }}
                                >
                                    {dateKey.split('-')[2]}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
