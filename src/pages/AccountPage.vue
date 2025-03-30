<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Update Account</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="name" label="Name" />
        <q-input v-model="email" label="Email" type="email" class="q-mt-md" />
        <q-input v-model="password" label="New Password" type="password" class="q-mt-md" />
        <q-btn @click="updateAccount" color="primary" class="q-mt-md full-width">Update</q-btn>
        <q-banner v-if="successMessage" class="q-mt-md" color="positive">
          {{ successMessage }}
        </q-banner>
        <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
          {{ errorMessage }}
        </q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

const name = ref('');
const email = ref('');
const password = ref('');
const successMessage = ref('');
const errorMessage = ref('');

// Fetch user data when the page loads
const fetchUserData = async () => {
  try {
    const response = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    name.value = response.data.name;
    email.value = response.data.email;
  } catch (error) {
    console.error('Failed to fetch user data', error);
    errorMessage.value = 'Failed to load user data.';
  }
};

// Update user data
const updateAccount = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  try {
    await api.put(
      '/user',
      {
        name: name.value,
        email: email.value,
        password: password.value || undefined, // Only send password if it's not empty
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    successMessage.value = 'Account updated successfully!';
  } catch (error) {
    console.error('Failed to update account', error);
    errorMessage.value = 'Failed to update account. Please try again.';
  }
};

// Fetch user data on page load
fetchUserData();
</script>

<style scoped>
/* Optional styling */
.q-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
