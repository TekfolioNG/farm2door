// composables/useAuthModal.ts
export const useAuthModal = () => {
  // Global state for auth modal
  const showAuthModal = useState<boolean>('auth.modal.show', () => false)
  const authModalMode = useState<'login' | 'signup'>('auth.modal.mode', () => 'login')
  
  // Methods to control modal
  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    authModalMode.value = mode
    showAuthModal.value = true
  }
  
  const closeAuthModal = () => {
    showAuthModal.value = false
  }
  
  const switchToLogin = () => {
    authModalMode.value = 'login'
  }
  
  const switchToSignup = () => {
    authModalMode.value = 'signup'
  }
  
  const toggleMode = () => {
    authModalMode.value = authModalMode.value === 'login' ? 'signup' : 'login'
  }
  
  return {
    // State
    showAuthModal: readonly(showAuthModal),
    authModalMode: readonly(authModalMode),
    
    // Methods
    openAuthModal,
    closeAuthModal,
    switchToLogin,
    switchToSignup,
    toggleMode
  }
}