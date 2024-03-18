import { useRouter, type NavigationFailure } from 'vue-router'

export const routingService = () => {
    const router = useRouter()

    async function toAnime(): Promise<void | NavigationFailure | undefined> {
        return router.push('/')
    }

    return {
        toAnime
    }
}