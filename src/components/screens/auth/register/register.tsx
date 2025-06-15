import { useRouter } from 'next/router'
import { FormEvent, HTMLAttributes, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useRegisterMutation } from '@/api/api'
import { setAccessToken } from '@/api/store/slices/authSlice'
import { TextField } from '@/components/ui/text-field/text-field'

import { AuthType } from '../auth'
import { Button } from '../components/button'
import { Field } from '../components/field'

interface RegisterProps extends HTMLAttributes<HTMLDivElement> {
    onUpdateAuthType: (type: AuthType) => void
}

export function Register({ className, ...props }: RegisterProps) {
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
            router.push('/')
        } catch (e) {
            console.error(e)
            console.log('registration failed')
        }
    }

    return (
        <div className={`w-full ${className}`} {...props}>
            <form onSubmit={handleSubmit} className='w-full'>
                <Field label="Введіть ім'я">
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ім'я"
                    />
                </Field>
                <Field label='Введіть електрону пошту'>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Електронна пошта'
                    />
                </Field>
                <Field label='Введіть Пароль'>
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Пароль'
                        type='password'
                    />
                </Field>
                <Button type='submit' disabled={isLoading}>
                    Зареєструватись
                </Button>
            </form>
        </div>
    )
}
