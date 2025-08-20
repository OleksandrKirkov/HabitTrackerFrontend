import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQueryWithReauth'
import { authEndpoint } from './endpoints/authEndpoint'
import { habitEndpoint } from './endpoints/habitEndpoint'
import { habitLogEndpoint } from './endpoints/habitLogEndpoint'

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        ...habitEndpoint(builder),
        ...authEndpoint(builder),
        ...habitLogEndpoint(builder),
    }),
    reducerPath: 'api',
})

export const {
    useArchiveHabitMutation,
    useCompleteHabitLogMutation,
    useCreateHabitMutation,
    useDeleteHabitMutation,
    useGetAllLogsQuery,
    useGetHabitByIdQuery,
    useGetHabitsQuery,
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
