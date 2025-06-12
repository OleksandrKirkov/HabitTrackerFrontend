export type TokenResponse = {
    accessToken: string
}

export type MeResponse = {
    avatarUrl: string
    email: string
    id: number
    name: string
}

export type RegisterRequest = {
    email: string
    password: string
    name: string
}

export type LoginRequest = {
    email: string
    password: string
}
