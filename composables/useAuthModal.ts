// composables/useAuthModal.ts
export const useAuthModal = () => {
    const showAuthModal = useState('authModal', () => false);
    
    const openAuthModal = () => {
        showAuthModal.value = true;
        // Prevent body scrolling when modal is open
        if (process.client) {
            document.body.style.overflow = 'hidden';
        }
    };
    
    const closeAuthModal = () => {
        showAuthModal.value = false;
        // Re-enable body scrolling
        if (process.client) {
            document.body.style.overflow = 'auto';
        }
    };
    
    return {
        showAuthModal: readonly(showAuthModal),
        openAuthModal,
        closeAuthModal
    };
};