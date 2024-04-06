export default defineNuxtRouteMiddleware(() => {
    console.log("auth.js middleware")
    const { authUser } = useAuth();

    if (!authUser.value) {
        return navigateTo('/auth/login')
    }
})