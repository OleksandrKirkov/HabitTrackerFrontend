import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

import { habitEndpoint } from './endpoints/habitEndpoint'

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = Cookies.get('access_token')
        if (token) headers.set('access_token', token)
        return headers
    },
})

export const api = createApi({
    baseQuery,
    endpoints: (builder) => ({
        ...habitEndpoint(builder),
    }),
    reducerPath: 'api',
})

export const {
    useArchiveHabitMutation,
    useCreateHabitMutation,
    useDeleteHabitMutation,
    useGetHabitByIdQuery,
    useGetHabitsByUserIdQuery,
    useUpdateHabitFrequencyMutation,
    useUpdateHabitReminderModeMutation,
    useUpdateHabitReminderStateMutation,
    useUpdateHabitReminderTimeMutation,
} = api
