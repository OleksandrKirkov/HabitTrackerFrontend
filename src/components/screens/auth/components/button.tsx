import { ButtonHTMLAttributes } from 'react'

export function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-full block p-3 font-medium leading-none text-white bg-secondary shadow-item rounded-2xl text-center ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
