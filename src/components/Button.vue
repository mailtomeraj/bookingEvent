<script setup>
// defineProps({
//     label:String
// })

defineEmits(['click'])

</script>

<template>
    <button class="rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-100" @click="$emit('click')">
     <slot></slot>
       </button>
</template>



<style>

</style>