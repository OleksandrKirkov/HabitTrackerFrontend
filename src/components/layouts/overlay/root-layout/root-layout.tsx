'use client'

import { PropsWithChildren } from 'react'

import { Header } from './header/header'

export const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='p-4'>
            <Header />

            {children}
        </div>
    )
}
