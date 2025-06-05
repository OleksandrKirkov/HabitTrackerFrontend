import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
})

export default function Home() {
    return (
        <div className={`${geistSans.className} ${geistMono.className}`}>
            <main className=''></main>
        </div>
    )
}
