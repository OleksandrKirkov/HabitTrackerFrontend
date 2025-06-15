import { useCallback, useState } from 'react'

import { Default } from './default/default'
import { Login } from './login/login'
import { Register } from './register/register'

export type AuthType = 'login' | 'register' | undefined

interface GetContentProps {
    onUpdateAuthType: (type: AuthType) => void
    type: AuthType
}

function GetContent({ onUpdateAuthType, type }: GetContentProps) {
    switch (type) {
        case 'login':
            return <Login onUpdateAuthType={onUpdateAuthType} />
        case 'register':
            return <Register onUpdateAuthType={onUpdateAuthType} />
        case undefined:
            return <Default onUpdateAuthType={onUpdateAuthType} />
    }
}

export function Auth() {
    const [authState, setAuthState] = useState<AuthType>()

    const onUpdateAuthType = useCallback((type: AuthType) => {
        setAuthState(type)
    }, [])

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col p-4'>
            <h1 className='font-bold leading-none text-4xl text-white'>Habits Tracker</h1>
            <p className='font-medium leading-none text-white mb-16'>{authState}</p>
            <GetContent type={authState} onUpdateAuthType={onUpdateAuthType} />
        </div>
    )
}
