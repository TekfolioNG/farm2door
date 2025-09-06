// middleware/auth.ts - Protect authenticated routes
export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  
  // If user is not logged in, redirect to home with login modal
  if (!isLoggedIn.value) {
    // Store the intended destination
    if (process.client) {
      sessionStorage.setItem('auth_redirect', to.fullPath)
    }
    
    return navigateTo('/?login=true')
  }
})

// middleware/guest.ts - For pages that should only be accessible to guests
export const guestOnly = defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  
  // If user is already logged in, redirect to dashboard
  if (isLoggedIn.value) {
    return navigateTo('/dashboard')
  }
})