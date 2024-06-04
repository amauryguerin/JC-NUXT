<template>
    <div v-if="!projectSinglePending">
        <h2>{{ projectSingleData.project.projectTitle }}</h2>
        <ProjectCarousel :projectSingleData="projectSingleData" :projectSinglePending="projectSinglePending"
            :projectSingleError="projectSingleError" />
    </div>
    <SiteFooter v-if="!siteFooterPending" :siteFooterData="siteFooterData" :siteFooterPending="siteFooterPending"
        :siteFooterError="siteFooterError" :isProjectVideo="isProjectVideo"
        :routerPath="`/projects/${route.params.slug}`" />
</template>

<script setup>
import { computed } from 'vue';
import projectBySlug from '@/api/queries/projectBySlug';
import siteFooter from '@/api/queries/siteFooter';

const route = useRoute();
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug });
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter);

const isProjectVideo = computed(() => {
    return projectSingleData.value && projectSingleData.value.project && projectSingleData.value.project.projectVideo !== null;
});
</script>
