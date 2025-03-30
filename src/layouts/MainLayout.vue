<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          AgroSense
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <!-- Show links only if the user is logged in -->
        <template v-if="isLoggedIn">
          <router-link v-for="link in linksList" :key="link.title" :to="link.link" class="router-link">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.title }}</q-item-label>
                <q-item-label caption>{{ link.caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
        </template>

        <!-- Show a message if the user is not logged in -->
        <template v-else>
          <q-item>
            <q-item-section>
              <q-item-label caption>Please log in to access the menu</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { isLoggedIn } from 'stores/authState'; // Import the global state
import { ref } from 'vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Overview with total sensors, farms, and recent alerts',
    icon: 'home',
    link: '/dashboard',
  },
  {
    title: 'My Farms',
    caption: 'List of user farms, tap to view details',
    icon: 'agriculture',
    link: '/farms',
  },
  {
    title: 'Sensors',
    caption: 'Global list of all sensors',
    icon: 'sensors',
    link: '/sensors',
  },
  {
    title: 'History',
    caption: 'Graphs showing sensor data over time',
    icon: 'insights',
    link: '/history',
  },
  {
    title: 'My Account',
    caption: 'Update name, email, and password',
    icon: 'person',
    link: '/account',
  },
  {
    title: 'Logout',
    caption: 'Logs out the user and clears token',
    icon: 'logout',
    link: '/logout',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
/* Remove default router-link styles */
.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
