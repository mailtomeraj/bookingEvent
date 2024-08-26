<script setup>
import { ref, onMounted } from 'vue';
import EventCard from './EventCard.vue'
import LoadingEventCard from './LoadingEventCard.vue';
import ErrorCard from './ErrorCard.vue';


const events = ref([])
const isLoading = ref(false)
const error = ref(null)

const fetchEvents = async () => {
  isLoading.value = true;
  error.value = null
  try {
    const response = await fetch('http://localhost:3000/events');
    events.value = await response.json();
  } 
  catch(e)
  {
    error.value = e
  }
  finally {
    isLoading.value = false;
  }
};
onMounted(() =>{
  fetchEvents()
 
});
defineEmits(['register'])

</script>

<template>
  <template v-if="error">
    <!-- <SectionCard>
      <div class="space-y-4 items-center flex flex-col">
        <div class="text-red-500">Could not load events at the moment. Please try again.</div>
        <RoundButton @click="fetchEvents">Retry now</RoundButton>
      </div>
    </SectionCard> -->
    <ErrorCard :retry="fetchEvents"
      >Could not load events at the moment. Please try again.</ErrorCard
    >
  </template>
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <template v-if="!isLoading">
          <template v-if="events.length">
        <EventCard v-for="event in events" 
        :key="event.id" 
        :title="event.title" 
        :when="event.date" 
        :description="event.description"
        @register="$emit('register', event)"
        />
      </template>
      <template v-else>
 <div class="col-span-2  justify-center text-center">No event yet</div>
        </template>
        <h2 class="text-2xl font-medium">Your Booking</h2>
        </template>
        
        <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i"/>
        </template>
        </section>
      </template>
</template>



<style>

</style>