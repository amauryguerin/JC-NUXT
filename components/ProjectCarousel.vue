<template>
    <Carousel :autoplay="4000" wrapAround pauseAutoplayOnHover>
        <Slide v-for="projectPhoto in projectSingleData.project.projectPhoto" :key="projectPhoto.id">
            <NuxtImg :src="projectPhoto.url" :alt="projectPhoto.alt" />
        </Slide>
        <template #addons>
            <navigation />
        </template>
    </Carousel>
</template>

<script setup>
const props = defineProps(['projectSingleData', 'projectSinglePending', 'projectSingleError']);
</script>