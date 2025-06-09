import { useState } from 'react'

export interface ToggleSwitchProps {
    checked?: boolean
    onChange?: (checked: boolean) => void
}

export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
    const [isChecked, setIsChecked] = useState(checked)

    const toggle = () => {
        setIsChecked((prev) => {
            const newVal = !prev
            onChange?.(newVal)
            return newVal
        })
    }

    return (
        <button
            onClick={toggle}
            type='button'
            className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${isChecked ? 'bg-[#E1B273]' : 'bg-gray-600'}`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-transform duration-300 ${isChecked ? 'translate-x-5 bg-[#f0be74]' : 'translate-x-0 bg-gray-400'}`}
            />
        </button>
    )
}
