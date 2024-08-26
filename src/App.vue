<script setup>
import { RouterLink, RouterView } from 'vue-router'
import EventList from './components/EventLists.vue';
import BookingList from './components/BookingList.vue';
import useBookings from './composables/useBooking';
const { handleRegistration } = useBookings()
</script>

<template>
  <main class="container mx-auto  my-8 space-y-8 px-4 lg:px-0">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Event</h2>
    <EventList @register="handleRegistration($event)" />
    <BookingList />
  </main>
  <RouterView />
</template>
