import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQueryWithReauth'
import { authEndpoint } from './endpoints/authEndpoint'
import { habitEndpoint } from './endpoints/habitEndpoint'

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        ...habitEndpoint(builder),
        ...authEndpoint(builder),
    }),
    reducerPath: 'api',
})

export const {
    useArchiveHabitMutation,
    useCreateHabitMutation,
    useDeleteHabitMutation,
    useGetHabitByIdQuery,
    useGetHabitsByUserIdQuery,
    useLoginMutation,
    useLogoutMutation,
    useMeQuery,
    useRefreshMutation,
    useRegisterMutation,
    useUpdateHabitFrequencyMutation,
    useUpdateHabitReminderModeMutation,
    useUpdateHabitReminderStateMutation,
    useUpdateHabitReminderTimeMutation,
} = api
