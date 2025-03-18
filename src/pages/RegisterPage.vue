<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 300px">
      <q-card-section>
        <q-input v-model="name" label="Name" />
        <q-input v-model="email" label="Email" type="email" class="q-mt-md" />
        <q-input v-model="password" label="Password" type="password" class="q-mt-md" />
        <q-btn @click="register" color="secondary" class="q-mt-md full-width">Register</q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await api.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    localStorage.setItem('token', response.data.token);
    router.push('/dashboard');
  } catch (error) {
    console.error('Registration failed', error);
  }
};
</script>
