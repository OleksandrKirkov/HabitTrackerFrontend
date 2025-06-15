import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useMeQuery } from '@/api/api'
import { NextPageWithLayout } from '@/pages/_app'

export function withAuth<P>(Component: NextPageWithLayout<P>) {
    return function Wrapped(props: P) {
        const { data, isError, isLoading } = useMeQuery()
        const router = useRouter()

        console.log(data)

        useEffect(() => {
            if (!isLoading && isError) {
                router.push('/auth')
            }
        }, [isLoading, isError, router])

        if (isLoading) return <p>Loading...</p>

        const getLayout = Component.getLayout ?? ((page) => page)
        return getLayout(<Component {...props} />)
    }
}
