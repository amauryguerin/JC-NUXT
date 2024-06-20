<template>
    <Carousel :autoplay="4000" wrapAround pauseAutoplayOnHover>
        <Slide v-for="project in projectMenuData.allProjects" :key="project.id">
            <nuxt-link :to="{ path: '/projects/' + project.projectSlug }">
                <NuxtImg :src="project.projectThumbnail.url" :alt="project.projectThumbnail.alt" />
                <h2>{{ project.projectTitle }}</h2>
            </nuxt-link>
        </Slide>
        <template #addons>
            <navigation />
        </template>
    </Carousel>
</template>

<script setup>
const props = defineProps(['projectMenuData', 'projectMenuPending', 'projectMenuError']);
</script>