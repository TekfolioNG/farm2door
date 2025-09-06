// plugins/auth.client.ts
export default defineNuxtPlugin(async () => {
const { initializeAuth } = useAuthModal()

  // Initialize authentication state on app start (client-side only)
if (process.client) {
    await initializeAuth()
}
})