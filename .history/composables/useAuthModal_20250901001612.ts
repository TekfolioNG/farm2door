// composables/useAuthModal.ts
export const useAuthModal = () => {
  const showAuthModal = useState<boolean>('auth.modal.show', () => false)
  const modalMode = useState<'login' | 'signup'>('auth.modal.mode', () => 'login')
  
  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    modalMode.value = mode
    showAuthModal.value = true
  }
  
  const closeAuthModal = () => {
    showAuthModal.value = false
  }
  
  const switchToLogin = () => {
    modalMode.value = 'login'
  }
  
  const switchToSignup = () => {
    modalMode.value = 'signup'
  }
  
  return {
    showAuthModal: readonly(showAuthModal),
    modalMode: readonly(modalMode),
    openAuthModal,
    closeAuthModal,
    switchToLogin,
    switchToSignup
  }
}