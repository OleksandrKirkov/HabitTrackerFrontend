import { Habit } from '@/types/endpoints/habit.types'

import ContributionGraph from './contribution-graph/contribution-graph'

export function History({ habitLogs }: Habit) {
    return (
        <div className='bg-secondary rounded-xl overflow-hidden p-4 mb-4 shadow-card'>
            <div className='flex items-center justify-between gap-2 mb-2'>
                <h2 className='font-bold text-white leading-none'>Frequency</h2>
                <p className='text-xs leading-none text-text'>Drag to see more</p>
            </div>

            <ContributionGraph habitLogs={habitLogs} />
        </div>
    )
}
