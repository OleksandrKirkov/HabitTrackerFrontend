import { HTMLAttributes } from 'react'

import { AuthType } from '../auth'
import { Button } from '../components/button'

interface DefaultProps extends HTMLAttributes<HTMLDivElement> {
    onUpdateAuthType: (type: AuthType) => void
}

export function Default({ className, onUpdateAuthType, ...props }: DefaultProps) {
    return (
        <div className={`w-full ${className}`} {...props}>
            <Button className='mb-2' onClick={() => onUpdateAuthType('login')}>
                Увійти
            </Button>
            <Button onClick={() => onUpdateAuthType('register')}>Зареєструватись</Button>
        </div>
    )
}
