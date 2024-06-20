<template>
    <Carousel :autoplay="5000" wrapAround pauseAutoplayOnHover>
        <Slide v-for="project in projectMenuData.allProjects" :key="project.id">
            <nuxt-link :to="{ path: '/projects/' + project.projectSlug }">
                <NuxtImg :src="project.projectThumbnail.url" :alt="project.projectThumbnail.alt"
                    :style="{ height: availableHeight }" />
                <h2 class="project--menu__title">{{ project.projectTitle }}</h2>
            </nuxt-link>
        </Slide>
        <template #addons>
            <navigation />
        </template>
    </Carousel>
</template>

<script setup>
const props = defineProps(['projectMenuData', 'projectMenuPending', 'projectMenuError', 'availableHeight']);
</script>

<style lang="scss" scoped>
.carousel {
    a {
        display: flex;
        flex-direction: column;

        img {
            max-width: 90vw;
            object-fit: contain;
        }
    }
}
</style>