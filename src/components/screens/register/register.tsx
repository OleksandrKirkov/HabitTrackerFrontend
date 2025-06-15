import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useRegisterMutation } from '@/api/api'
import { setAccessToken } from '@/api/store/slices/authSlice'

import { AuthType } from '../auth/auth'

interface RegisterProps {
    onUpdateAuthType: (type: AuthType) => void
}

export function Register({ onUpdateAuthType }: RegisterProps) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [register, { isLoading }] = useRegisterMutation()
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await register({ email, name, password }).unwrap()
            dispatch(setAccessToken(res.accessToken))
            localStorage.setItem('accessToken', res.accessToken)
            router.push('/home')
        } catch {
            console.log('registration failed')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                type='password'
            />
            <button type='submit' disabled={isLoading}>
                Register
            </button>
        </form>
    )
}
