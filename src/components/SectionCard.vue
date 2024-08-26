<script setup>
import Card from './Card.vue';

</script>
<template>
    <Card>
        <h3 v-if="$slots.header" class="p-4 border-b border-gray-200 font-medium text-xl">
      <slot name="header"></slot></h3>
        <div v-if="$slots.default" :class="{'p-4':true, 'border-b border-gray-200':$slots.footer}">
        <slot></slot></div>
        <div v-if="$slots.footer" class="p-4">
        <slot name="footer"></slot>
       </div>
         </Card>
</template>


<style lang="scss" scoped>

</style>