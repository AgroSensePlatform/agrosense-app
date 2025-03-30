import { ref } from 'vue'

export const isLoggedIn = ref(!!localStorage.getItem('token')) // Initialize based on token
