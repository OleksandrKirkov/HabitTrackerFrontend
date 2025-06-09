export function getColorMap(prefix: 'bg' | 'border' | 'stroke' | 'text', color: string) {
    const map: Record<string, Record<string, string>> = {
        bg: {
            blue: 'bg-blue',
            green: 'bg-green',
            red: 'bg-red',
            violet: 'bg-violet',
            yellow: 'bg-yellow',
        },
        border: {
            blue: 'border-blue',
            green: 'border-green',
            red: 'border-red',
            violet: 'border-violet',
            yellow: 'border-yellow',
        },
        stroke: {
            blue: 'stroke-blue',
            green: 'stroke-green',
            red: 'stroke-red',
            violet: 'stroke-violet',
            yellow: 'stroke-yellow',
        },
        text: {
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            violet: 'text-violet',
            yellow: 'text-yellow',
        },
    }

    return map[prefix]?.[color] || ''
}
