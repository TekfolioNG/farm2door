// middleware/auth.ts - Protect specific authenticated routes only
export default defineNuxtRouteMiddleware((to, from) => {

  // Development bypass - skip auth in development mode
 //  if (process.dev) {
  //   return
 //  }
  const { isLoggedIn } = useAuth()
  
  // Define routes that require authentication
  const protectedRoutes = [
    '/dashboard',
    '/profile', 
    '/orders',
    '/checkout',
    '/account',
    '/settings'
    // Note: /market is NOT in this list, so anyone can browse
  ]
  
  // Check if current route requires authentication
  const requiresAuth = protectedRoutes.some(route => to.path.startsWith(route))
  
  // If route requires auth and user is not logged in, redirect to home with login modal
  if (requiresAuth && !isLoggedIn.value) {
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

// middleware/auth-required.ts - For components that need strict auth (optional - use this in specific pages)
export const authRequired = defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  
  // Always require authentication
  if (!isLoggedIn.value) {
    if (process.client) {
      sessionStorage.setItem('auth_redirect', to.fullPath)
    }
    
    return navigateTo('/?login=true')
  }
})