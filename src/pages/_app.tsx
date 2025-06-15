import '@/styles/globals.css'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

import { setAccessToken } from '@/api/store/slices/authSlice'
import { store } from '@/api/store/store'

export type NextPageWithLayout<P = object> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function InitAccessToken() {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            dispatch(setAccessToken(token))
        }
    }, [])

    return null
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <Provider store={store}>
            <InitAccessToken />
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    )
}
