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
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useSeoStore } from '@/stores/siteSeo.js'

import projectBySlug from '@/api/queries/projectBySlug'
import siteFooter from '@/api/queries/siteFooter'

import { useSiteLayoutStore } from '@/stores/siteLayout.js';

const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter)
const isProjectVideo = computed(() => {
    return projectSingleData.value && projectSingleData.value.project && projectSingleData.value.project.projectVideo !== null
})

const seoStore = useSeoStore();
watchEffect(() => {
    if (seoStore.seoData && projectSingleData.value) {
        const projectSeoData = seoStore.seoData.allProjects.find(project => project.id === projectSingleData.value.project.id).seoMetadata
        useSeoMeta({
            title: projectSeoData.title,
            ogTitle: projectSeoData.title,
            description: projectSeoData.description,
            ogDescription: projectSeoData.description,
            twitterCard: projectSeoData.twitterCard,
            ogImage: projectSeoData.image.url
        })
    }
})

const siteLayoutStore = useSiteLayoutStore()
onMounted(() => {
    console.log('Header height:', siteLayoutStore.headerHeight)
});
</script>

<style lang="scss"></style>