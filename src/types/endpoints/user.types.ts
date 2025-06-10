import { Integration } from './integration.types'
import { SyncBackup } from './sync-backup.types'
import { UserAchievement } from './user-achievement.types'

export type User = {
    id: string
    email: string
    passwordHash: string
    name: string
    avatarUrl: string
    createdAt: string
    updatedAt: string
    habits: string[]
    userAchievements: UserAchievement[]
    syncBackups: SyncBackup[]
    integrations: Integration[]
}
