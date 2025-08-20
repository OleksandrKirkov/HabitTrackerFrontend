import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'

import { CompleteHabitLogRequest } from '@/types/endpoints/habit-log.types'

export const habitLogEndpoint = (builder: EndpointBuilder<BaseQueryFn, never, 'api'>) => ({
    completeHabitLog: builder.mutation<string[], CompleteHabitLogRequest>({
        query: ({ id, ...request }) => ({
            body: request,
            method: 'POST',
            url: `habit-logs/${id}/log`,
        }),
    }),
    getAllLogs: builder.query<string[], number>({
        query: (habit_id) => `habit-logs/habit/${habit_id}`,
    }),
})
