<template>
  <q-page class="q-pa-md">
    <div class="row items-center justify-between q-mb-md">
      <div class="text-h5">My Farms</div>
      <q-btn label="Add New Farm" color="primary" icon="add" :to="{ path: '/farms/add' }" />
    </div>

    <q-list>
      <q-item class="bg-grey-2 q-mb-md q-mt-md" v-for="farm in farms" :key="farm.id" clickable v-ripple bordered
        :to="{ path: `/farms/${farm.id}` }">
        <q-item-section avatar>
          <q-icon name="agriculture" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ farm.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
      {{ errorMessage }}
    </q-banner>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';

const farms = ref([]);
const errorMessage = ref('');

// Fetch the user's farms
const fetchFarms = async () => {
  try {
    const response = await api.get('/farms', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    farms.value = response.data;
  } catch (error) {
    console.error('Failed to fetch farms', error);
    errorMessage.value = 'Failed to load farms. Please try again later.';
  }
};

// Fetch farms when the page loads
onMounted(() => {
  fetchFarms();
});
</script>

<style scoped>
/* Optional styling */
.q-page {
  max-width: 800px;
  margin: auto;
}
</style>
