<template>
    <Carousel :autoplay="0" :itemsToShow="1.25" wrapAround pauseAutoplayOnHover snapAlign="center">
        <Slide v-for="projectPhoto in projectSingleData.project.projectPhoto" :key="projectPhoto.id">
            <NuxtImg :src="projectPhoto.url" :alt="projectPhoto.alt" :style="{ height: availableHeight }" />
        </Slide>
        <template #addons>
            <navigation />
        </template>
    </Carousel>
</template>

<script setup>
const props = defineProps(['projectSingleData', 'projectSinglePending', 'projectSingleError', 'availableHeight']);
</script>

<style lang="scss" scoped>
.carousel {
    img {
        max-width: 90vw;
        object-fit: contain;
    }
}
</style>