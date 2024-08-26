<script setup>
import SectionCard from './SectionCard.vue'
import Button from './Button.vue'
import { defineProps, defineEmits, computed } from 'vue'
import { LoaderCircle, Check} from 'lucide-vue-next';

const props = defineProps({
  title: String,
  status:String
})

const pending = computed(()=> props.status === 'pending' )
const icon = computed(()=> (pending.value ? LoaderCircle : Check))

defineEmits(['cancelled'])

</script>

<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flex justify-between space-x-2">
        {{ props.title }}    
      <component :is="icon" :class="{'animate-spin':pending}" class="ml-2"/>
      </div>
      <Button class="bg-red-200 enabled:hover:bg-red-100 text-red-900" @click="$emit('cancelled')">Cancel</Button>
    </div>
  </SectionCard>
</template>

<style></style>
