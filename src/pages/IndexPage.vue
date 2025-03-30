<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/agrosense-logo.png" style="width: 200px; height: 100px">
    <div v-if="isLoggedIn">
      <h1>Welcome, {{ user.name }}!</h1>
    </div>
    <q-btn v-if="!isLoggedIn" :to="{ path: '/login' }" label="Go to Login" color="primary" class="q-mt-md full-width" />
    <q-btn v-if="!isLoggedIn" :to="{ path: '/register' }" label="Register" color="primary" class="q-mt-md full-width" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token;

  // Redirect to Dashboard if logged in
  if (isLoggedIn.value) {
    router.push('/dashboard');
  }
});
</script>
