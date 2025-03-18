<template>
  <q-layout>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 300px">
        <q-card-section>
          <q-input v-model="email" label="Email" type="email" />
          <q-input v-model="password" label="Password" type="password" class="q-mt-md" />
          <q-btn @click="login" color="primary" class="q-mt-md full-width">Login</q-btn>
          <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
            {{ errorMessage }}
          </q-banner>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  errorMessage.value = '';
  try {
    const response = await api.post('/login', {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem('token', response.data.token);
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed', error);
    errorMessage.value = 'Login failed. Please check your credentials and try again.';
  }
};
</script>
