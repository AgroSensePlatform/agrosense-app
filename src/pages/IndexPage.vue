<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
    <div v-if="isLoggedIn">
      <h1>Welcome, {{ user.name }}!</h1>
    </div>
    <q-btn v-if="!isLoggedIn" :to="{ path: '/login' }" label="Go to Login" color="primary" class="q-mt-md full-width" />
    <q-btn v-if="!isLoggedIn" :to="{ path: '/register' }" label="Register" color="primary" class="q-mt-md full-width" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('token');
});
</script>
