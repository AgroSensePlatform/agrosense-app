<script setup>
import { useRouter } from 'vue-router';

// Use Vue Router to handle redirection
const router = useRouter();

// Clear the token from localStorage and redirect to the index page
localStorage.removeItem('token'); // Remove the token
router.push('/'); // Redirect to the index page
</script>

<template>
  <q-page class="flex flex-center">
    <q-spinner color="primary" size="50px" />
    <div class="q-ml-md">Logging out...</div>
  </q-page>
</template>

<style scoped>
/* Optional styling for the logout spinner */
.q-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
