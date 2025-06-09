export interface DayCell {
    date: Date
    dayOfWeek: number
    iso: string
    month: string
}

export const generateCalendar = (): { weeks: DayCell[][]; monthLabels: string[] } => {
    const start = new Date(new Date().getFullYear(), 0, 1)
    const today = new Date()
    const weeks: DayCell[][] = []
    let currentWeek: DayCell[] = []

    for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
        const date = new Date(d)
        const day: DayCell = {
            date,
            dayOfWeek: date.getDay(),
            iso: date.toISOString().split('T')[0],
            month: date.toLocaleString('default', { month: 'short' }),
        }

        if (day.dayOfWeek === 0 && currentWeek.length) {
            weeks.push(currentWeek)
            currentWeek = []
        }

        currentWeek.push(day)
    }

    if (currentWeek.length) weeks.push(currentWeek)

    return {
        monthLabels: getMonthLabels(weeks),
        weeks,
    }
}

const getMonthLabels = (weeks: DayCell[][]): string[] => {
    const labels: string[] = []
    for (let i = 0; i < weeks.length; i++) {
        const firstDay = weeks[i].find(Boolean)
        labels[i] =
            firstDay && (i === 0 || firstDay.date.getMonth() !== weeks[i - 1][0]?.date.getMonth())
                ? firstDay.month
                : ''
    }
    return labels
}
