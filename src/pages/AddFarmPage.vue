<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md" style="max-width: 600px; margin: auto;">
      <q-card-section>
        <div class="text-h6">Add New Farm</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="farmName" label="Farm Name" outlined class="q-mb-md" />

        <q-btn label="Save Current Coordinates" color="primary" icon="gps_fixed" @click="saveCoordinates"
          class="q-mb-md" />

        <q-list v-if="coordinatesList.length > 0" bordered>
          <q-item v-for="(coord, index) in coordinatesList" :key="index" clickable>
            <q-item-section>
              <q-item-label>Latitude: {{ coord.latitude }}</q-item-label>
              <q-item-label>Longitude: {{ coord.longitude }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
          {{ errorMessage }}
        </q-banner>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save Farm" color="positive" @click="saveFarm" />
        <q-btn label="Cancel" color="negative" flat @click="cancel" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

const farmName = ref('');
const coordinatesList = ref([]);
const errorMessage = ref('');
const router = useRouter();

// Save the current GPS coordinates
const saveCoordinates = async () => {
  try {
    if (!navigator.geolocation) {
      throw new Error('Geolocation is not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        coordinatesList.value.push({ latitude, longitude });
      },
      (error) => {
        console.error('Failed to get GPS coordinates', error);
        errorMessage.value = 'Failed to get GPS coordinates. Please try again.';
      }
    );
  } catch (error) {
    console.error(error.message);
    errorMessage.value = error.message;
  }
};

// Save the farm to the backend
const saveFarm = async () => {
  if (!farmName.value || coordinatesList.value.length === 0) {
    errorMessage.value = 'Please provide a farm name and at least one set of coordinates.';
    return;
  }

  try {
    await api.post(
      '/farms',
      {
        name: farmName.value,
        coordinates: coordinatesList.value,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }
    );

    router.push('/farms'); // Redirect to the farms list page
  } catch (error) {
    console.error('Failed to save farm', error);
    errorMessage.value = 'Failed to save farm. Please try again.';
  }
};

// Cancel and go back to the farms list
const cancel = () => {
  router.push('/farms');
};
</script>

<style scoped>
/* Optional styling */
.q-page {
  max-width: 800px;
  margin: auto;
}
</style>
