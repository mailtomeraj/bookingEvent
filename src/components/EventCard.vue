<script setup>
import Button from './Button.vue';
// import Card from './Card.vue';
import SectionCard from './SectionCard.vue';
defineProps({
    title:String,
    when:String,
    description:String,
    label:String
})
defineEmits('register')

</script>

<template>
    <SectionCard>
        <template #header>
         {{ title }}
        </template>
        {{ when }}
        <template #footer>
            <p>{{description}}</p>
            <div class="flex justify-end p-4">
                <Button  @click="$emit('register')">
                    Register
                    </Button>
               </div>
        </template>
 
</SectionCard>

</template>



<style lang="scss" scoped>

</style>