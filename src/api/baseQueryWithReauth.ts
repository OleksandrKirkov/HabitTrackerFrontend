import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { BASE_URL } from '@/config/config'

import { clearAccessToken, setAccessToken } from './store/slices/authSlice'
import type { RootState } from './store/store'

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken
        console.log(token)
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
})

export const baseQueryWithReauth: BaseQueryFn<
    FetchArgs | string,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const url = typeof args === 'string' ? args : args.url

    const isPublicRoute = ['/auth'].some((path) => url.includes(path))

    let result = await baseQuery(args, api, extraOptions)

    console.log(result, 'result')

    if (result.error?.status === 401 && !isPublicRoute) {
        const refreshResult = await baseQuery('/auth/refresh', api, {
            ...extraOptions,
            method: 'POST',
        })

        if (refreshResult?.data && (refreshResult.data as any).accessToken) {
            const newToken = (refreshResult.data as any).accessToken

            api.dispatch(setAccessToken(newToken))
            localStorage.setItem('accessToken', newToken)

            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(clearAccessToken())
            localStorage.removeItem('accessToken')
            if (typeof window !== 'undefined') {
                window.location.href = '/auth'
            }
        }
    }

    return result
}
