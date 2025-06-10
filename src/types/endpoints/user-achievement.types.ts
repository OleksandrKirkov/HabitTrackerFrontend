import { Achievement } from './achievement.types'

export type UserAchievement = {
    id: string
    userId: string
    user: string
    achievementId: string
    achievement: Achievement[]
    unlockedAt: string
}
