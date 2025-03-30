<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" v-if="isLoggedIn" />

        <q-toolbar-title>
          AgroSense
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered v-if="isLoggedIn">
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

// Reactive property to track user authentication status
const isLoggedIn = ref(false)

// Check for token in localStorage to determine login status
onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('token') // Set to true if token exists
})

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Overview with total sensors, farms, and recent alerts',
    icon: 'home',
    link: '/dashboard'
  },
  {
    title: 'My Farms',
    caption: 'List of user farms, tap to view details',
    icon: 'agriculture',
    link: '/farms'
  },
  {
    title: 'Sensors',
    caption: 'Global list of all sensors',
    icon: 'sensors',
    link: '/sensors'
  },
  {
    title: 'History',
    caption: 'Graphs showing sensor data over time',
    icon: 'insights',
    link: '/history'
  },
  {
    title: 'My Account',
    caption: 'Update name, email, and password',
    icon: 'person',
    link: '/account'
  },
  {
    title: 'Logout',
    caption: 'Logs out the user and clears token',
    icon: 'logout',
    link: '/logout'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
