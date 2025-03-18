<template>
  <q-page class="q-pa-md">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard, {{ userName }}!</p>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';

const userName = ref('');

onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    userName.value = response.data.name;
  } catch (error) {
    console.error('Failed to fetch user data', error);
  }
});
</script>
