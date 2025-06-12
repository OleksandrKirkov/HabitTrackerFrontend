import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query/react'

import {
    CreateHabitRequest,
    GetHabitsByUserResponse,
    Habit,
    UpdateFrequencyRequest,
    UpdateReminderModeRequest,
    UpdateReminderStateRequest,
    UpdateReminderTimeRequest,
} from '@/types/endpoints/habit.types'

const habitEndpoint = (builder: EndpointBuilder<BaseQueryFn, never, 'api'>) => ({
    archiveHabit: builder.mutation<void, number>({
        query: (id) => ({ method: 'POST', url: `habit/${id}/archive` }),
    }),
    createHabit: builder.mutation<Habit, CreateHabitRequest>({
        query: (request) => ({
            body: request,
            method: 'POST',
            url: 'habit',
        }),
    }),
    deleteHabit: builder.mutation<void, number>({
        query: (id) => ({
            method: 'DELETE',
            url: `habit/${id}`,
        }),
    }),
    getHabitById: builder.query<Habit, number>({
        query: (userId) => `habit/user/${userId}`,
    }),
    getHabitsByUserId: builder.query<GetHabitsByUserResponse, number>({
        query: (id) => `habit/${id}/archive`,
    }),
    updateHabitFrequency: builder.mutation<void, UpdateFrequencyRequest>({
        query: ({ id, ...request }) => ({
            body: request,
            method: 'PATCH',
            url: `habit/${id}/frequency`,
        }),
    }),
    updateHabitReminderMode: builder.mutation<void, UpdateReminderModeRequest>({
        query: ({ id, ...request }) => ({
            body: request,
            method: 'PATCH',
            url: `habit/${id}/reminder-mode`,
        }),
    }),
    updateHabitReminderState: builder.mutation<void, UpdateReminderStateRequest>({
        query: ({ id, ...request }) => ({
            body: request,
            method: 'PATCH',
            url: `habit/${id}/reminder-state`,
        }),
    }),
    updateHabitReminderTime: builder.mutation<void, UpdateReminderTimeRequest>({
        query: ({ id, ...request }) => ({
            body: request,
            method: 'PATCH',
            url: `habit/${id}/reminder-time`,
        }),
    }),
})

export { habitEndpoint }
