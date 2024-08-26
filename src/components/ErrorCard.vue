<template>
    <Card>
        <div class="items-center space-y-4  flex flex-col p-4">
          <div class="text-red-500">
            <slot/>
          </div>
          <div
          
          ><Button @click="retry" v-if="retry">Retry now</Button></div>
        </div>
      </Card>
</template>

<script setup>
import Card from './Card.vue';
import Button from './Button.vue';
import { defineProps } from 'vue';

defineProps({
  retry: {
    type: Function,
    required: false
  }
});
</script>

<style>

</style>