import { HTMLAttributes } from 'react'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
    label: string
}

export function Field({ children, className, label, ...props }: FieldProps) {
    return (
        <div className={`not-last:mb-2 ${className}`} {...props}>
            <h3 className='font-medium leading-none text-white'>{label}</h3>
            {children}
        </div>
    )
}
