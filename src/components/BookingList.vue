<template>
    <template v-if="error">
        <!-- <Card>
          <div class="space-y-4 items-center flex flex-col">
            <div class="text-red-500">Could not load events at the moment. Please try again.</div>
            <RoundButton @click="bookingsEvents">Retry now</RoundButton>
          </div>
        </Card> -->
        <ErrorCard :retry="bookingsEvents"
          > Failed to fetch bookings</ErrorCard
        >
      </template>
    <template v-else>
    <section class="grid grid-cols-1 gap-4">
        <template v-if="!isBookingLoading">
          <BookingItem 
          v-for="booking in bookings" 
          :key="booking.id" 
          :title="booking.eventTitle"
          :status="booking.status"
          @cancelled="cancelBooking(booking.id)"
          />
          </template>
          <template v-else>
          <LoadingBookingCard v-for="i in 4" :key="i"/>
          </template>
      </section>
    </template>
</template>

<script setup>
import { onMounted } from 'vue';
import LoadingBookingCard from './LoadingBookingCard.vue';
import BookingItem from './BookingItem.vue';

import useBookings from '@/composables/useBooking';
import ErrorCard from './ErrorCard.vue';
const {bookings, isBookingLoading, bookingsEvents, error, cancelBooking } = useBookings()
onMounted(() =>{
  bookingsEvents()
});
</script>

<style>

</style>