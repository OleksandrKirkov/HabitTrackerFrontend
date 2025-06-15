import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { useLogoutMutation } from '@/api/api'
import { clearAccessToken } from '@/api/store/slices/authSlice'

export function Logout() {
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = async () => {
        await logout().unwrap()
        dispatch(clearAccessToken())
        localStorage.removeItem('accessToken')
        router.push('/login')
    }

    return <button onClick={handleLogout}>logout</button>
}
