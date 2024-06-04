<template>
    <Carousel v-if="!projectSinglePending" :autoplay="4000" wrapAround pauseAutoplayOnHover>
        <Slide v-for="projectPhoto in projectSingleData.project.projectPhoto" :key="0">
            <NuxtImg :src="projectPhoto.url" :alt="projectPhoto.alt" />
        </Slide>
    </Carousel>
</template>

<script setup>
const props = defineProps(['projectSingleData', 'projectSinglePending', 'projectSingleError']);
</script>