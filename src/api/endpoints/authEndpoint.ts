import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'

import {
    LoginRequest,
    MeResponse,
    RegisterRequest,
    TokenResponse,
} from '@/types/endpoints/auth.types'

export const authEndpoint = (builder: EndpointBuilder<BaseQueryFn, never, 'api'>) => ({
    login: builder.mutation<TokenResponse, LoginRequest>({
        query: (body) => ({
            body,
            method: 'POST',
            url: 'auth/login',
        }),
    }),
    logout: builder.mutation<void, void>({
        query: () => ({
            method: 'POST',
            url: 'auth/logout',
        }),
    }),
    me: builder.query<MeResponse, void>({
        query: () => 'me',
    }),
    refresh: builder.mutation<TokenResponse, void>({
        query: () => ({
            method: 'POST',
            url: 'auth/refresh',
        }),
    }),
    register: builder.mutation<TokenResponse, RegisterRequest>({
        query: (body) => ({
            body,
            method: 'POST',
            url: 'auth/register',
        }),
    }),
})
