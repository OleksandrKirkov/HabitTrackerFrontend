import { useRouter } from 'next/router'
import { FormEvent, HTMLAttributes, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useLoginMutation } from '@/api/api'
import { setAccessToken } from '@/api/store/slices/authSlice'
import { TextField } from '@/components/ui/text-field/text-field'

import { AuthType } from '../auth'
import { Button } from '../components/button'

interface LoginProps extends HTMLAttributes<HTMLDivElement> {
    onUpdateAuthType: (type: AuthType) => void
}

export function Login({ className, ...props }: LoginProps) {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { isLoading }] = useLoginMutation()

    const dispatch = useDispatch()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await login({ email, password }).unwrap()
            dispatch(setAccessToken(res.accessToken))
            localStorage.setItem('accessToken', res.accessToken)
            router.push('/')
        } catch {
            console.log('login failed')
        }
    }

    return (
        <div className={` ${className}`} {...props}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Електронна пошта'
                    className='mb-2'
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Пароль'
                    className='mb-2'
                />
                <Button type='submit'>Увійти</Button>
            </form>
        </div>
    )
}
