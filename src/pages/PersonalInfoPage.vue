// filepath: /home/gkalog-laptop/workspace/AgroSense/agrosense-app/src/pages/PersonalInfoPage.vue
<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 300px">
      <q-card-section>
        <q-input v-model="name" label="Name" />
        <q-input v-model="email" label="Email" type="email" class="q-mt-md" />
        <q-input v-model="phone" label="Phone" type="tel" class="q-mt-md" />
        <q-btn @click="updateInfo" color="primary" class="q-mt-md full-width">Update Info</q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

const name = ref('');
const email = ref('');
const phone = ref('');

const updateInfo = async () => {
  try {
    const response = await api.put('/personal-info', {
      name: name.value,
      email: email.value,
      phone: phone.value,
    });

    console.log('Info updated successfully', response.data);
  } catch (error) {
    console.error('Update failed', error);
  }
};
</script>
