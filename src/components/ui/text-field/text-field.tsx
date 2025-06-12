import { InputHTMLAttributes } from 'react'

export function TextField({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`bg-primary shadow-card w-full h-12 rounded-2xl px-4 outline-none text-white placeholder:text-text ${className}`}
            {...props}
        />
    )
}
